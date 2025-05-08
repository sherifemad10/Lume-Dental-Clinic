import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, FileText, Check } from 'lucide-react';

interface AppointmentState {
  doctorId?: string;
  doctorName?: string;
  appointmentDate?: string;
  appointmentTime?: string;
}

const AppointmentForm: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctorId, doctorName, appointmentDate, appointmentTime } =
    (location.state as AppointmentState) || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: appointmentDate || '',
    time: appointmentTime || '',
    reason: '',
    isNewPatient: false,
    doctor: doctorName || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [availableDays, setAvailableDays] = useState<number[]>([]);

  const doctorAvailability: Record<string, number[]> = {
    'Dr. Sherif Emad - Surgeon': [1, 3, 6], // Mon, Wed, Sat
    'Dr. Sara Mohammed - Surgeon': [0, 2, 4], // Sun, Tue, Thu
    'Dr. Aian Musa - Dentist': [1, 2, 3, 4], // Mon-Thu
    'Dr. Aseel Ali - Orthodontist': [0, 5, 6], // Sun, Fri, Sat
  };

  useEffect(() => {
    if (formData.doctor) {
      setAvailableDays(doctorAvailability[formData.doctor] || []);
    } else {
      setAvailableDays([]);
    }
  }, [formData.doctor]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDay = new Date(formData.date).getDay();
      if (selectedDay === 5) newErrors.date = 'Appointments are not available on Fridays.';
    }
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.reason.trim()) newErrors.reason = 'Reason for visit is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const isDateAvailable = (date: string) => {
    if (!formData.doctor) return true; // If no doctor selected, allow all
    const day = new Date(date).getDay();
    return availableDays.includes(day);
  };

  const isPastDate = (date: string) => {
    return new Date(date) < new Date(getTodayDate());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // WhatsApp message formatting
      const message =
        `New Appointment Request:%0A` +
        `Name: ${formData.name}%0A` +
        `Email: ${formData.email}%0A` +
        `Phone: ${formData.phone}%0A` +
        `Doctor: ${formData.doctor}%0A` +
        `Date: ${formData.date}%0A` +
        `Time: ${formData.time}%0A` +
        `Reason: ${formData.reason}%0A` +
        `New Patient: ${formData.isNewPatient ? 'Yes' : 'No'}`;
      const whatsappUrl = `https://wa.me/201145455951?text=${message}`;
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  const getTodayDate = () => new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <Check className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Appointment Booked!</h1>
            <p className="text-gray-700 mb-6">
              Thank you for booking your appointment. We've sent a confirmation to {formData.email}.
              Our team will contact you shortly to confirm your appointment.
            </p>
            <Link to="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center text-[var(--primary-color)] font-medium mb-8 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Book Your Appointment</h1>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form below to schedule your appointment with our dental experts.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <User className="h-4 w-4 mr-2 text-[var(--primary-color)]" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg outline-none transition ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-[var(--primary-color)]" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg outline-none transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-[var(--primary-color)]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg outline-none transition ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Preferred Doctor
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none transition"
                  >
                    <option value="" hidden>Select a doctor (optional)</option>
                    <option value="Dr. Sherif Emad - Surgeon">Dr. Sherif Emad - Surgeon</option>
                    <option value="Dr. Sara Mohammed - Surgeon">Dr. Sara Mohammed - Surgeon</option>
                    <option value="Dr. Aian Musa - Dentist">Dr. Aian Musa - Dentist</option>
                    <option value="Dr. Aseel Ali - Orthodontist">Dr. Aseel Ali - Orthodontist</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-[var(--primary-color)]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={e => {
                      const selectedDate = e.target.value;
                      if (isPastDate(selectedDate)) {
                        setErrors(prev => ({ ...prev, date: 'Cannot select a past date.' }));
                        setFormData(prev => ({ ...prev, date: '' }));
                        return;
                      }
                      if (!isDateAvailable(selectedDate)) {
                        setErrors(prev => ({ ...prev, date: 'Selected day is not available for this doctor.' }));
                        setFormData(prev => ({ ...prev, date: '' }));
                        return;
                      }
                      handleChange(e);
                    }}
                    className={`w-full p-3 border rounded-lg outline-none transition ${
                      errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                    min={getTodayDate()}
                    disabled={!formData.doctor}
                  />
                  {!formData.doctor && (
                    <p className="text-gray-500 text-sm mt-1">Select a doctor to see available dates.</p>
                  )}
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-[var(--primary-color)]" />
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg outline-none transition ${
                      errors.time ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                  </select>
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2 flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-[var(--primary-color)]" />
                  Reason for Visit
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full p-3 border rounded-lg outline-none transition ${
                    errors.reason ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Please describe your dental concerns or the type of appointment you need..."
                ></textarea>
                {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
              </div>

              <div className="mb-8">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isNewPatient"
                    checked={formData.isNewPatient}
                    onChange={handleChange}
                    className="rounded text-[var(--primary-color)] h-5 w-5 mr-2"
                  />
                  <span className="text-gray-700">I am a new patient</span>
                </label>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-10">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
