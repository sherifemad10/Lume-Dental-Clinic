import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface BookAppointmentFormProps {
  doctorId: number;
  doctorName: string;
}

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  date: z.date({ required_error: 'Please select a date' }),
  time: z.string().min(1, { message: 'Please select a time' }),
  reason: z.string().min(10, { message: 'Please provide a reason for your visit' }),
});

type FormValues = z.infer<typeof formSchema>;

const availableTimes = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
];

// Import doctors data to get availability
const doctors = [
  {
    id: 1,
    name: "Dr. Sherif Emad",
    availableDays: [1, 3, 5] // Monday, Wednesday, Friday
  },
  {
    id: 2,
    name: "Dr. Sara Mohammed",
    availableDays: [2, 4, 6] // Tuesday, Thursday, Saturday
  },
  {
    id: 3,
    name: "Dr. Aian Musa",
    availableDays: [1, 2, 3, 4, 5] // Monday to Friday
  },
  {
    id: 4,
    name: "Dr. Aseel Ali",
    availableDays: [0, 6] // Sunday and Saturday
  },
];

const BookAppointmentForm = ({ doctorId, doctorName }: BookAppointmentFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      time: '',
      reason: '',
    }
  });

  const sendToWhatsApp = (data: FormValues) => {
    const formattedDate = format(data.date, 'PPP');
    const message = `
New Appointment Request:
Name: ${data.name}
Phone: ${data.phone}
Date: ${formattedDate}
Time: ${data.time}
Doctor: ${doctorName}
Reason: ${data.reason}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201210587417?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Send to WhatsApp
      sendToWhatsApp(data);

      toast({
        title: "Appointment Booked!",
        description: `Your appointment with ${doctorName} on ${format(data.date, 'PPP')} at ${data.time} has been scheduled.`,
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error booking your appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDoctorAvailability = () => {
    const doctor = doctors.find(doc => doc.id === doctorId);
    return doctor?.availableDays || [];
  };

  return (
    <div className="mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
        
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={`w-full pl-3 text-left font-normal ${!field.value ? "text-muted-foreground" : ""}`}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <Calendar className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        if (date < today) return true;
                        
                        const dayOfWeek = date.getDay();
                        const availableDays = getDoctorAvailability();
                        return !availableDays.includes(dayOfWeek);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <select
                    className="w-full p-2 border rounded-md"
                    {...field}
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for Visit</FormLabel>
                <FormControl>
                  <Input placeholder="Please describe your dental concerns..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-dental-blue text-black hover:bg-dental-blue-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking..." : "Book Appointment"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookAppointmentForm;
