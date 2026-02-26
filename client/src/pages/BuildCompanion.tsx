import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

/**
 * Build Companion Page for AfriVoice
 * Design Philosophy: Form-focused, real-time preview, encouraging
 * Shows live preview of companion as user fills form
 */

export default function BuildCompanion() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "My Tutor",
    subject: "English",
    voiceType: "female",
    speakingStyle: "friendly",
    language: "English",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const subjectEmojis: Record<string, string> = {
    English: "📚",
    Mathematics: "🔢",
    Science: "🔬",
    History: "🏛️",
    Art: "🎨",
    Music: "🎵",
  };

  const subjectColors: Record<string, string> = {
    English: "bg-primary",
    Mathematics: "bg-secondary",
    Science: "bg-tertiary",
    History: "bg-primary",
    Art: "bg-secondary",
    Music: "bg-tertiary",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container py-4 flex items-center gap-4">
          <Button
            onClick={() => setLocation("/dashboard")}
            variant="ghost"
            size="sm"
            className="text-foreground/70 hover:text-foreground gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-bold text-lg text-foreground">
            Create Your AI Tutor
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2 space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-semibold">
                Companion Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Ms. Sarah, Prof. Ahmed"
                className="bg-card border-border text-foreground placeholder:text-foreground/50"
              />
              <p className="text-xs text-foreground/60">
                Give your AI tutor a friendly name
              </p>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-foreground font-semibold">
                Subject
              </Label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>English</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>History</option>
                <option>Art</option>
                <option>Music</option>
              </select>
              <p className="text-xs text-foreground/60">
                What will your tutor teach?
              </p>
            </div>

            {/* Voice Type */}
            <div className="space-y-3">
              <Label className="text-foreground font-semibold">Voice Type</Label>
              <div className="grid grid-cols-3 gap-4">
                {["female", "male", "neutral"].map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, voiceType: type }))
                    }
                    className={`p-4 rounded-lg border-2 transition-all text-center capitalize font-semibold ${
                      formData.voiceType === type
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-foreground hover:border-primary/50"
                    }`}
                  >
                    {type === "female" && "👩"}
                    {type === "male" && "👨"}
                    {type === "neutral" && "🤖"}
                    <p className="text-xs mt-2">{type}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Speaking Style */}
            <div className="space-y-3">
              <Label className="text-foreground font-semibold">
                Speaking Style
              </Label>
              <div className="grid grid-cols-3 gap-4">
                {["formal", "casual", "friendly"].map((style) => (
                  <button
                    key={style}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        speakingStyle: style,
                      }))
                    }
                    className={`p-4 rounded-lg border-2 transition-all text-center capitalize font-semibold ${
                      formData.speakingStyle === style
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-foreground hover:border-primary/50"
                    }`}
                  >
                    {style === "formal" && "📋"}
                    {style === "casual" && "😊"}
                    {style === "friendly" && "🤗"}
                    <p className="text-xs mt-2">{style}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div className="space-y-2">
              <Label htmlFor="language" className="text-foreground font-semibold">
                Language
              </Label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>English</option>
                <option>Swahili</option>
                <option>French</option>
                <option>Arabic</option>
                <option>Yoruba</option>
              </select>
              <p className="text-xs text-foreground/60">
                What language will your tutor speak?
              </p>
            </div>

            {/* Create Button */}
            <Button
              onClick={() => setLocation("/dashboard")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 gap-2"
            >
              <Sparkles className="w-5 h-5" /> Create Companion
            </Button>
          </div>

          {/* Live Preview */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h3 className="font-bold text-foreground mb-4">Preview</h3>

              <Card className="p-8 text-center space-y-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                {/* Avatar */}
                <div
                  className={`w-20 h-20 rounded-full ${subjectColors[formData.subject]} flex items-center justify-center text-5xl mx-auto`}
                >
                  {subjectEmojis[formData.subject] || "🎓"}
                </div>

                {/* Name */}
                <div>
                  <h4 className="text-xl font-bold text-foreground">
                    {formData.name}
                  </h4>
                  <p className="text-sm text-foreground/70">
                    {formData.subject} Tutor
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-foreground/60 border-t border-primary/20 pt-4">
                  <p>
                    <span className="font-semibold text-foreground">Voice:</span>{" "}
                    {formData.voiceType}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Style:</span>{" "}
                    {formData.speakingStyle}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Language:
                    </span>{" "}
                    {formData.language}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                    {formData.subject}
                  </span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-semibold">
                    {formData.voiceType}
                  </span>
                </div>
              </Card>

              <p className="text-xs text-foreground/60 text-center mt-4">
                This is how your companion will appear on the dashboard
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
