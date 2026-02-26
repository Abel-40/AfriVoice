# AfriVoice Design System & Prototype Plan

## Design Philosophy

**AfriVoice** is a voice-first learning platform designed for mobile-first, low-literacy students across Africa. The design philosophy emphasizes **clarity, accessibility, and emotional warmth** while maintaining a modern, premium aesthetic.

### Core Design Principles

1. **Voice-Centric Visual Language**: Every UI element should reinforce the voice-first interaction model. Large, prominent microphone buttons and visual feedback for audio states.
2. **Accessibility First**: High contrast, large touch targets (minimum 48x48px), simple navigation, minimal text, and icon-based communication.
3. **Warmth & Encouragement**: Soft colors, friendly illustrations, and positive micro-interactions that celebrate learning progress.
4. **Mobile-Optimized**: Vertical scrolling, thumb-friendly layouts, and minimal cognitive load per screen.
5. **Contextual Hierarchy**: Clear visual distinction between primary actions (voice interaction) and secondary actions (settings, navigation).

---

## Design System

### Color Palette

| Role | Color | OKLCH | Usage |
|------|-------|-------|-------|
| **Primary** | Vibrant Teal | `oklch(0.55 0.18 200)` | CTA buttons, voice indicators, active states |
| **Secondary** | Warm Orange | `oklch(0.65 0.15 45)` | Accent highlights, companion cards |
| **Tertiary** | Soft Purple | `oklch(0.60 0.12 280)` | Alternative companion theme, learning paths |
| **Success** | Fresh Green | `oklch(0.65 0.15 150)` | Progress indicators, completed sessions |
| **Neutral Light** | Off-White | `oklch(0.98 0.001 0)` | Backgrounds, cards |
| **Neutral Dark** | Charcoal | `oklch(0.20 0.01 0)` | Text, borders |
| **Muted** | Light Gray | `oklch(0.92 0.002 0)` | Dividers, inactive states |

### Typography System

| Element | Font | Size | Weight | Line Height | Usage |
|---------|------|------|--------|-------------|-------|
| **Display** | Poppins | 32–48px | 700 | 1.2 | Page titles, hero sections |
| **Heading 1** | Poppins | 28px | 600 | 1.3 | Section titles |
| **Heading 2** | Poppins | 20px | 600 | 1.4 | Card titles, companion names |
| **Body** | Inter | 16px | 400 | 1.6 | Main content, descriptions |
| **Small** | Inter | 14px | 400 | 1.5 | Metadata, timestamps |
| **Caption** | Inter | 12px | 500 | 1.4 | Labels, helper text |

**Font Pairing Rationale**: Poppins (geometric, friendly, modern) for headings creates visual warmth and personality, while Inter (clean, readable) for body text ensures accessibility and readability for low-literacy users.

### Spacing & Layout

- **Base Unit**: 8px
- **Mobile Container**: Full width with 16px padding (24px on tablet, 32px on desktop)
- **Card Spacing**: 16px gap between cards in grids
- **Section Spacing**: 32px vertical spacing between major sections
- **Touch Target Minimum**: 48x48px for all interactive elements

### Shadows & Depth

| Layer | Shadow | Usage |
|-------|--------|-------|
| **Elevated (Cards)** | `0 2px 8px rgba(0,0,0,0.08)` | Companion cards, session cards |
| **Modal** | `0 10px 40px rgba(0,0,0,0.15)` | Dialogs, modals |
| **Floating** | `0 4px 16px rgba(0,0,0,0.1)` | Floating action buttons |

### Border Radius

- **Small**: 8px (buttons, small components)
- **Medium**: 12px (cards, input fields)
- **Large**: 16px (large cards, modals)
- **Full**: 9999px (circular avatars, badges)

---

## Page Structure & Flow

### 1. Landing Page
**Purpose**: Introduce AfriVoice and convert visitors to sign-up.

**Key Sections**:
- **Hero Section**: Large headline "Learn by Talking to AI," with a prominent illustration of a student using voice
- **Value Proposition**: Three cards highlighting core benefits (No typing needed, AI tutor available 24/7, Learn at your pace)
- **How It Works**: Four-step visual flow showing the user journey
- **Testimonials/Social Proof**: Brief quotes from students (optional for MVP)
- **CTA Section**: "Get Started" button leading to sign-up

**Design Notes**:
- Hero background: Generated gradient or illustration with high-key (light, watercolor) aesthetic
- Color scheme: Teal and orange accents on neutral background
- Mobile-first: Single column layout, large touch targets

---

### 2. Authentication Pages
**Pages**: Sign Up, Sign In, Forgot Password

**Sign Up Flow**:
- Email input
- Password input with strength indicator
- Language selection (dropdown or radio buttons)
- "Create Account" button
- Link to sign in

**Sign In Flow**:
- Email input
- Password input
- "Sign In" button
- "Forgot Password?" link

**Design Notes**:
- Minimal, focused design with single-column layout
- Clear error messages and validation feedback
- Warm, encouraging copy ("Welcome back!" or "Join thousands of learners")

---

### 3. Home Dashboard
**Purpose**: Central hub where users access companions and view learning progress.

**Key Sections**:
- **Header**: User greeting ("Hello, [Name]!"), profile icon, settings
- **Learning Companions Grid**: Cards for each companion (icon, name, subject, color, tags)
- **My Journey Section**: Recent sessions with duration, date, and progress indicator
- **Quick Stats**: Total minutes learned, sessions completed, current streak
- **Create New Companion Button**: Floating action button or card

**Design Notes**:
- Grid layout (2 columns on mobile, 3+ on tablet/desktop)
- Companion cards with rounded corners, soft shadows, and color-coded backgrounds
- Progress bars showing learning journey
- Warm, encouraging tone in copy

---

### 4. Companion Detail Page
**Purpose**: View companion profile and start a voice session.

**Key Sections**:
- **Companion Header**: Avatar, name, subject, description, tags
- **Companion Stats**: Sessions completed, total time, last session date
- **Start Session Button**: Large, prominent CTA
- **Session History**: List of past sessions with transcripts (optional)
- **Edit/Delete Options**: For user-created companions

**Design Notes**:
- Full-width card layout with companion color as accent
- Large "Start Session" button (minimum 56px height)
- Clear visual hierarchy with companion name and subject prominent

---

### 5. Build Companion Page
**Purpose**: Allow users to create custom AI tutors.

**Form Fields**:
- **Companion Name**: Text input
- **Subject**: Dropdown or search field
- **Voice Type**: Radio buttons or carousel (Male, Female, Neutral)
- **Speaking Style**: Radio buttons (Formal, Casual, Friendly)
- **Language**: Dropdown
- **System Prompt/Personality**: Text area (optional, advanced)

**Preview Section**:
- Live preview of companion card as user fills form
- Shows name, subject, color, voice type

**Design Notes**:
- Single-column form layout
- Clear labels and helper text
- Real-time preview of companion card
- "Create Companion" button at bottom
- Success toast after creation

---

### 6. Voice Session Page
**Purpose**: Main interaction point—user talks to AI companion.

**Key Elements**:
- **Companion Header**: Small avatar, name, subject (sticky at top)
- **Large Microphone Button**: Center of screen, animated when listening/speaking
- **AI Speaking Indicator**: Visual feedback showing AI is speaking (animated waveform or pulsing circle)
- **Live Transcript Panel**: Shows user and AI messages in real-time
- **Session Timer**: Duration of current session
- **End Session Button**: Bottom of screen, secondary style
- **Companion Avatar**: Large, centered above microphone

**Design Notes**:
- Vertical layout optimized for mobile
- Microphone button: 80–120px diameter, teal color, animated on interaction
- Transcript: Light background, clear text, emoji or icons for speaker identification
- Smooth animations for voice state changes
- Haptic feedback cues (if device supports)

---

### 7. Session Summary Page
**Purpose**: Show results of a voice session and encourage further learning.

**Key Sections**:
- **Session Stats**: Duration, messages exchanged, topics covered
- **Progress Update**: Points earned, streak continuation
- **Key Takeaways**: Summary of what was learned (AI-generated)
- **Next Steps**: Suggestions for next companion or topic
- **Actions**: "Start Another Session," "View Journey," "Home"

**Design Notes**:
- Celebratory tone with success indicators
- Progress bars and achievement badges
- Warm colors (green for success)
- Large, easy-to-tap action buttons

---

### 8. My Journey / Progress Page
**Purpose**: Show overall learning progress and history.

**Key Sections**:
- **Progress Overview**: Total sessions, total time, learning streak
- **Learning Chart**: Visual representation of sessions over time (bar chart or line graph)
- **Session History**: Filterable list of all sessions (by companion, date, subject)
- **Achievements/Badges**: Milestones reached (first session, 10 sessions, 1 hour learned, etc.)

**Design Notes**:
- Vertical scrolling layout
- Charts and visualizations with teal/orange colors
- Session cards with companion color accent
- Filter/sort options at top

---

### 9. Settings Page
**Purpose**: User account and app preferences.

**Key Sections**:
- **Profile Settings**: Name, email, avatar, language
- **Learning Preferences**: Preferred subjects, learning pace, notification settings
- **Voice Settings**: Preferred voice type, speaking speed, accent
- **Privacy & Data**: Data usage, session history retention
- **Help & Support**: FAQ, contact support, app version

**Design Notes**:
- Simple, organized layout with sections separated by dividers
- Toggle switches for boolean settings
- Dropdown selects for preferences
- Clear "Save Changes" button

---

## Additional Pages (MVP Enhancements)

### 10. Onboarding Flow
**Purpose**: Guide new users through app features.

**Screens**:
1. Welcome screen with app value proposition
2. Language selection
3. Learning goal selection
4. First companion recommendation
5. Permission requests (microphone access)

**Design Notes**:
- Full-screen slides with illustrations
- Large, clear CTAs
- Progress indicator (dots or step counter)

---

### 11. Empty States & Error Pages
**Purpose**: Handle edge cases gracefully.

**Scenarios**:
- No companions created yet (show onboarding or create button)
- No session history (show encouragement and CTA)
- Microphone permission denied (show instructions)
- Network error (show retry option)
- 404 / Not Found (show home link)

**Design Notes**:
- Friendly, helpful copy
- Illustrations or icons
- Clear action buttons

---

## Interactive Prototyping Elements

### Micro-Interactions

| Element | Interaction | Animation |
|---------|-------------|-----------|
| **Microphone Button** | Tap to start/stop | Scale up (1 → 1.1), color change, ripple effect |
| **Companion Cards** | Tap to select | Subtle scale (1 → 1.02), shadow increase |
| **Session Transcript** | Auto-scroll | Smooth scroll to latest message |
| **Progress Bar** | Fill animation | Smooth width increase with ease-out timing |
| **Voice Indicator** | AI speaking | Animated waveform or pulsing circle |
| **Page Transitions** | Route change | Fade in (0.3s) or slide from right (0.4s) |
| **Toast Notifications** | Success/error | Slide in from bottom, auto-dismiss after 3s |

### Hover States (Desktop)

- Buttons: Slight color darkening, shadow increase
- Cards: Subtle shadow increase, slight scale (1 → 1.02)
- Links: Underline appears, color change

---

## Accessibility Considerations

1. **Color Contrast**: All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
2. **Touch Targets**: Minimum 48x48px for all interactive elements
3. **Focus Indicators**: Clear, visible focus rings on all interactive elements
4. **Text Alternatives**: Icons paired with text labels or aria-labels
5. **Keyboard Navigation**: All interactive elements accessible via keyboard
6. **Reduced Motion**: Respect `prefers-reduced-motion` media query
7. **Screen Reader Support**: Semantic HTML, ARIA labels, and role attributes

---

## Implementation Roadmap

### Phase 1 (MVP - Core Pages)
- Landing page
- Authentication pages (sign up, sign in)
- Home dashboard
- Voice session page
- Session summary

### Phase 2 (Enhanced UX)
- Build companion page
- My journey / progress page
- Onboarding flow
- Settings page

### Phase 3 (Polish & Optimization)
- Micro-interactions and animations
- Empty states and error pages
- Performance optimization
- Accessibility audit and fixes

---

## Design Assets to Generate

1. **Hero Background**: Abstract, warm, watercolor-style illustration (high-key)
2. **Companion Avatars**: 5–8 diverse, friendly character illustrations
3. **How It Works Icons**: 4 step-by-step visual icons
4. **Empty State Illustrations**: 3–4 friendly, encouraging illustrations
5. **Session Success Illustration**: Celebratory graphic for session summary

---

## Next Steps

1. Create high-fidelity mockups for all pages in Figma
2. Build interactive prototype with page transitions and micro-interactions
3. Implement responsive design for mobile, tablet, and desktop
4. Conduct user testing with target audience (low-literacy students)
5. Iterate based on feedback and finalize design system

---

**Design System Version**: 1.0  
**Last Updated**: February 26, 2026  
**Status**: Ready for Implementation
