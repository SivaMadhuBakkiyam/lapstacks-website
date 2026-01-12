import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Check, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDLY_LINK = "https://calendly.com/lamstacks";

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM"
];

const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      dates.push(date);
    }
  }
  return dates;
};

export const ScheduleCallModal = ({ isOpen, onClose }: ScheduleCallModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isBooked, setIsBooked] = useState(false);
  const [useCalendly, setUseCalendly] = useState(false);

  const dates = generateDates();

  const handleSubmit = () => {
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      onClose();
    }, 3000);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    });
  };

  const openCalendly = () => {
    window.open(CALENDLY_LINK, "_blank");
  };

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setUseCalendly(false);
      setIsBooked(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-xl font-bold text-foreground">Schedule a Call</h2>
                <p className="text-sm text-muted-foreground">Book a time that works for you</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <AnimatePresence mode="wait">
                {isBooked ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Call Scheduled!</h3>
                    <p className="text-muted-foreground">
                      We've sent a confirmation to {formData.email}
                    </p>
                    <div className="mt-4 p-4 bg-muted rounded-xl inline-block">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{selectedDate && formatDate(selectedDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{selectedTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {/* Calendly Option */}
                    <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">Prefer Calendly?</h4>
                          <p className="text-sm text-muted-foreground">Schedule directly via our Calendly</p>
                        </div>
                        <Button 
                          onClick={openCalendly}
                          variant="outline" 
                          className="gap-2 rounded-full"
                        >
                          Open Calendly
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="relative mb-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Or schedule below</span>
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        Select a Date
                      </h3>
                      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                        {dates.slice(0, 10).map((date) => (
                          <button
                            key={date.toISOString()}
                            onClick={() => setSelectedDate(date)}
                            className={`p-3 rounded-xl border transition-all text-center ${
                              selectedDate?.toDateString() === date.toDateString()
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border hover:border-primary hover:bg-primary/5"
                            }`}
                          >
                            <div className="text-xs opacity-70">
                              {date.toLocaleDateString("en-US", { weekday: "short" })}
                            </div>
                            <div className="font-semibold">{date.getDate()}</div>
                            <div className="text-xs opacity-70">
                              {date.toLocaleDateString("en-US", { month: "short" })}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        Select a Time (IST)
                      </h3>
                      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 rounded-lg border text-sm transition-all ${
                              selectedTime === time
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border hover:border-primary hover:bg-primary/5"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    {/* Selected DateTime Summary */}
                    <div className="p-4 bg-primary/5 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{selectedDate && formatDate(selectedDate)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{selectedTime}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setStep(1)}
                        className="text-sm text-primary hover:underline"
                      >
                        Change
                      </button>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block text-foreground">Name *</label>
                        <Input
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block text-foreground">Company</label>
                        <Input
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Email *</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">Phone</label>
                      <Input
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-foreground">What would you like to discuss?</label>
                      <textarea
                        className="w-full p-3 rounded-lg border border-input bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                        rows={3}
                        placeholder="Tell us about your project or requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {!isBooked && (
              <div className="flex items-center justify-between p-6 border-t border-border bg-muted/30">
                {step === 2 && (
                  <Button
                    variant="ghost"
                    onClick={() => setStep(1)}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                )}
                {step === 1 && <div />}
                
                {step === 1 ? (
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!selectedDate || !selectedTime}
                    className="gap-2 rounded-full px-6"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email}
                    className="gap-2 rounded-full px-6"
                  >
                    <Check className="w-4 h-4" />
                    Book Call
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};