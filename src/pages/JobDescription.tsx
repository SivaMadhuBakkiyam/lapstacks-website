import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { MapPin, Briefcase, Calendar, Users, Share2, Upload, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Layout from "@/components/layout/Layout";

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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    coverLetter: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplyModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <Layout>
      {/* Job Header */}
      <section className="gradient-diagonal relative">
        <div className="container-custom py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{jobData.title}</h1>
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
            className="absolute top-12 right-8 hidden lg:flex items-center gap-4"
          >
            <Button
              onClick={() => setIsApplyModalOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 rounded-full px-8"
            >
              Apply Now
            </Button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="w-5 h-5" />
              Share Job
            </button>
          </motion.div>
        </div>
      </section>

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
                  <h2 className="text-xl font-bold mb-4">Job description</h2>
                  <p className="text-muted-foreground whitespace-pre-line">{jobData.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Requirements</h2>
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
                  <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
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
                  <h2 className="text-xl font-bold mb-4">Qualifications and Experience</h2>
                  <p className="text-muted-foreground">{jobData.qualifications}</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Key Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {jobData.skills.map((skill) => (
                      <span key={skill} className="badge-gray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Benefit & Perks</h2>
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
                <button className="p-3 border border-border rounded-full hover:bg-muted transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Similar Jobs Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold">Similar jobs</h3>
              <div className="space-y-4">
                {similarJobs.map((job) => (
                  <Link
                    key={job.id}
                    to={`/jobs/${job.id}`}
                    className="block bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold mb-2">{job.title}</h4>
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
                      <span>$ {job.salary}</span>
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

      {/* Apply Modal */}
      <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Apply to {jobData.title}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Upload Resume/CV</label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm">
                  <span className="text-primary font-medium">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Accepted file types: pdf, doc, docx | max 5Mb
                </p>
              </div>
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
                  placeholder="Full name"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input
                  placeholder="Full name"
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

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Submit application
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">Thank you for your application!</h2>
            <p className="text-muted-foreground">
              We've received it successfully. If there's a good fit, someone from our team will be in touch with you soon.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default JobDescription;
