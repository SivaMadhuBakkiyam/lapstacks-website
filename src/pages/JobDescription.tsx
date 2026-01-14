import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { MapPin, Briefcase, Calendar, Users, Share2, Upload, X, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Layout from "@/components/layout/Layout";
import { LightHeroBackground } from "@/components/common/HeroBackground";
import { ShareJobModal } from "@/components/modals/ShareJobModal";

const jobData = {
  id: 1,
  title: "Senior Frontend Engineer",
  location: "Remote, India",
  experience: "3 - 7 experience",
  salary: "₹25-35 LPA",
  tags: ["Engineering", "Full-time", "Urgently hiring"],
  posted: "3 days ago",
  openings: 1,
  applicants: "100+",
  description: `At Groww, customer-centricity is displayed in everything we do. We are obsessed with providing a seamless experience for our customers. Regardless of the touchpoints, our Customer Success Team ensures the customer finds what s/he needs in a fast and easy way.

To make this happen, we are looking for dynamic and energetic professionals with good communication skills who demonstrate a customer-first attitude. This role is critical as it is the first point of call for the customers.`,
  requirements: [
    "Provide technical support and ad-hoc training to customers who use the company's product, replying to inbound queries.",
    "Ensure customers remain satisfied with the product by educating them about functional capabilities and possible upgrades.",
    "Aid with the development and improvement of the product by gathering feedback to identify recurring issues and addressing these with the product manager.",
    "Maintain excellent service standards, going above and beyond to ensure customer satisfaction and retention."
  ],
  responsibilities: [
    "Provide technical support and ad-hoc training to customers who use the company's product, replying to inbound queries.",
    "Ensure customers remain satisfied with the product by educating them about functional capabilities and possible upgrades.",
    "Aid with the development and improvement of the product by gathering feedback to identify recurring issues and addressing these with the product manager.",
    "Maintain excellent service standards, going above and beyond to ensure customer satisfaction and retention."
  ],
  qualifications: "Graduate or Post graduate (B.E/B.Tech)",
  skills: ["User Experience Design", "UX Design", "Agentic AI", "UX Research", "Information Architecture", "UX Generative AI", "Sketching"],
  perks: ["Certificate", "Letter of recommendation", "Free snacks & beverages", "Flexible work hours", "5 days a week"]
};

const similarJobs = [
  { id: 2, title: "Senior Frontend Engineer", location: "Remote, India", experience: "3 - 7 experience", salary: "₹25-35 LPA", tags: ["Engineering", "Full-time", "Urgently hiring"] },
  { id: 3, title: "Senior Frontend Engineer", location: "Remote, India", experience: "3 - 7 experience", salary: "₹25-35 LPA", tags: ["Engineering", "Full-time", "Urgently hiring"] },
  { id: 4, title: "Senior Frontend Engineer", location: "Remote, India", experience: "3 - 7 experience", salary: "₹25-35 LPA", tags: ["Engineering", "Full-time", "Urgently hiring"] },
  { id: 5, title: "Senior Frontend Engineer", location: "Remote, India", experience: "3 - 7 experience", salary: "₹25-35 LPA", tags: ["Engineering", "Full-time", "Urgently hiring"] }
];

const getTagColor = (tag: string) => {
  if (tag.includes("Full-time")) return "badge-blue";
  if (tag.includes("Urgently")) return "badge-orange";
  return "badge-gray";
};

const JobDescription = () => {
  const { id } = useParams();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMainHeader, setShowMainHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    coverLetter: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show sticky apply header after scrolling 200px
      setIsScrolled(currentScrollY > 200);
      
      // Hide main header when scrolling down past 100px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowMainHeader(false);
      } else if (currentScrollY < lastScrollY) {
        setShowMainHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsParsing(true);
      
      // Simulate resume parsing - in production, this would call an API
      setTimeout(() => {
        // Mock parsed data from resume
        setFormData({
          fullName: "John Smith",
          email: "john.smith@email.com",
          phone: "+91 98765 43210",
          location: "Bangalore, India",
          linkedIn: "linkedin.com/in/johnsmith",
          coverLetter: ""
        });
        setIsParsing(false);
      }, 1500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplyModalOpen(false);
    setIsSuccessModalOpen(true);
    // Reset form
    setUploadedFile(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedIn: "",
      coverLetter: ""
    });
  };

  return (
    <Layout hideHeader={!showMainHeader}>
      {/* Sticky Apply Header - Shows when scrolled and main header hidden */}
      <AnimatePresence>
        {isScrolled && !showMainHeader && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-card/98 backdrop-blur-md border-b border-border shadow-lg"
          >
            <div className="container-custom py-4 flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-lg text-foreground truncate">{jobData.title}</h2>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {jobData.location}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{jobData.experience}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{jobData.salary}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button 
                  onClick={() => setIsShareModalOpen(true)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <Share2 className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </button>
                <Button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 rounded-full px-6 sm:px-8"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Job Header - No decoration */}
      <LightHeroBackground className="py-12" showDecoration={false}>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">{jobData.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {jobData.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {jobData.experience}
              </span>
              <span>$ {jobData.salary}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {jobData.tags.map((tag) => (
                <span key={tag} className={getTagColor(tag)}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Posted: {jobData.posted}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Openings: {jobData.openings}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Applicants: {jobData.applicants}
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-0 right-0 hidden lg:flex items-center gap-4"
          >
            <Button
              onClick={() => setIsApplyModalOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 rounded-full px-8"
            >
              Apply Now
            </Button>
            <button 
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Share Job
            </button>
          </motion.div>
        </div>
      </LightHeroBackground>

      {/* Job Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-card border border-border rounded-xl p-8 space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4 text-foreground">Job description</h2>
                  <p className="text-muted-foreground whitespace-pre-line">{jobData.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-foreground">Requirements</h2>
                  <ul className="space-y-3">
                    {jobData.requirements.map((req, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-foreground">Responsibilities</h2>
                  <ul className="space-y-3">
                    {jobData.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-foreground">Qualifications and Experience</h2>
                  <p className="text-muted-foreground">{jobData.qualifications}</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-foreground">Key Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {jobData.skills.map((skill) => (
                      <span key={skill} className="badge-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-foreground">Benefit & Perks</h2>
                  <div className="flex flex-wrap gap-4">
                    {jobData.perks.map((perk) => (
                      <span key={perk} className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-primary">•</span>
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Apply Button */}
              <div className="lg:hidden flex gap-4">
                <Button
                  onClick={() => setIsApplyModalOpen(true)}
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 rounded-full"
                >
                  Apply Now
                </Button>
                <button 
                  onClick={() => setIsShareModalOpen(true)}
                  className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Apply Button */}
              <div className="flex justify-center">
                <Button
                  onClick={() => setIsApplyModalOpen(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 rounded-full px-12"
                >
                  Apply for this Job
                </Button>
              </div>
            </motion.div>

            {/* Similar Jobs Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold text-foreground">Similar jobs</h3>
              <div className="space-y-4">
                {similarJobs.map((job) => (
                  <Link
                    key={job.id}
                    to={`/jobs/${job.id}`}
                    className="block bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold mb-2 text-foreground">{job.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className={`text-xs ${getTagColor(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs">
                      <span className="text-muted-foreground">{job.experience}</span>
                      <span className="text-foreground">$ {job.salary}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                      <span className="text-primary text-sm font-medium">View Details</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apply Modal - Fixed height with scrollable content */}
      <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[85vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-4 flex-shrink-0 border-b border-border">
            <DialogTitle>Apply to {jobData.title}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* File Upload */}
              <div>
                <label className="text-sm font-medium mb-2 block">Upload Resume/CV</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
                {uploadedFile ? (
                  <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{uploadedFile.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {isParsing ? "Parsing resume..." : "Resume parsed successfully"}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setUploadedFile(null);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          location: "",
                          linkedIn: "",
                          coverLetter: ""
                        });
                      }}
                      className="p-1 hover:bg-muted rounded-full"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer"
                  >
                    <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm">
                      <span className="text-primary font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Accepted file types: pdf, doc, docx | max 5Mb
                    </p>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full name</label>
                  <Input
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Current location</label>
                  <Input
                    placeholder="Current location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">LinkedIn Profile URL</label>
                <Input
                  placeholder="Link"
                  value={formData.linkedIn}
                  onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Cover Letter (Optional)</label>
                <Textarea
                  placeholder="Tell us why you're a great fit......"
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                />
              </div>
            </div>

            {/* Fixed footer */}
            <div className="p-6 pt-4 border-t border-border flex-shrink-0">
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isParsing}>
                {isParsing ? "Parsing Resume..." : "Submit application"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
          </motion.div>
          <DialogTitle className="text-2xl">Application Submitted!</DialogTitle>
          <p className="text-muted-foreground mt-2">
            Thank you for applying. We'll review your application and get back to you soon.
          </p>
          <Button
            onClick={() => setIsSuccessModalOpen(false)}
            className="mt-4 rounded-full px-8"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

      {/* Share Modal */}
      <ShareJobModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        jobTitle={jobData.title}
        jobId={id || "1"}
      />
    </Layout>
  );
};

export default JobDescription;
