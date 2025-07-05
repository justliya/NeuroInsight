



# NeuroInsight

A neurodivergent-friendly personal assistant app built with Expo and React Native, featuring income-based pricing and comprehensive privacy controls.

## Features

### Core Functionality
- **Personalized Dashboard**: Customized based on user preferences and focus areas
- **Journal & Mood Tracking**: Private journaling with mood tracking and analytics
- **Executive Function Support**: Tools for planning, organizing, and managing daily tasks
- **Communication Assistance**: Practice tools and templates for social interactions
- **Scheduling & Reminders**: Smart scheduling with sensory considerations
- **Nutrition Tracking**: Mindful eating with sensory-friendly meal planning

### Accessibility & Personalization
- **Adaptive UI**: Font scaling, high contrast, and theme options
- **Neurodivergent-Affirming Design**: Built by and for neurodivergent individuals
- **Sensory Considerations**: Reduced motion, customizable colors, and gentle interactions
- **Flexible AI Assistance**: Adjustable levels of AI guidance (1-5 scale)

### Privacy & Ethics
- **Explicit Opt-In System**: Users choose what data to share
- **Data Transparency**: Clear dashboard showing what the app knows
- **Local Storage Priority**: Data processed locally when possible
- **Export & Delete**: Full control over personal data

### Income-Based Pricing
- **Under $20K annually**: Free access to all features
- **$20K-$50K annually**: $5/month
- **$50K+ annually**: $15/month
- **Honor System**: Simple, neurodivergent-friendly verification

## Tech Stack

- **Frontend**: React Native with Expo
- **Navigation**: Expo Router
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: RevenueCat (for native builds)
- **Icons**: Lucide React Native
- **Styling**: StyleSheet (no external CSS frameworks)

## Getting Started

### Prerequisites
- Node.js 18+
- Expo CLI
- Supabase account
- RevenueCat account (for payments)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd neuroinsight
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Fill in your Supabase and RevenueCat credentials in `.env`:
```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_REVENUECAT_IOS_API_KEY=your_ios_api_key
EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY=your_android_api_key
```

4. Run the development server:
```bash
npm run dev
```

### Database Setup

The app uses Supabase for data storage. The database schema includes:

- **profiles**: User profiles with personalization data
- **journal_entries**: Private journal entries with mood tracking
- **onboarding_progress**: Track user onboarding completion
- **privacy_consents**: Granular privacy permission tracking
- **accessibility_settings**: User accessibility preferences
- **user_preferences**: Flexible key-value preference storage

All tables include Row Level Security (RLS) policies to ensure users can only access their own data.

### RevenueCat Integration

For subscription management, the app integrates with RevenueCat:

1. **Web Development**: Uses mock implementation for browser preview
2. **Native Builds**: Requires actual RevenueCat SDK installation
3. **Export Required**: To test payments, export the project and use Expo Dev Client

To set up RevenueCat for native builds:
```bash
npm install react-native-purchases
```

Follow the [RevenueCat Expo guide](https://www.revenuecat.com/docs/getting-started/installation/expo) for complete setup.

## Project Structure

```
app/
├── _layout.tsx                 # Root layout with providers
├── (tabs)/                     # Main tab navigation
│   ├── index.tsx              # Home dashboard
│   ├── coaching.tsx           # Executive function coaching
│   ├── communication.tsx      # Communication tools
│   ├── schedule.tsx           # Scheduling and reminders
│   ├── nutrition.tsx          # Nutrition tracking
│   └── profile.tsx            # User profile and settings
├── auth/                      # Authentication screens
├── onboarding/                # Multi-step onboarding flow
└── journal/                   # Journal and mood tracking

components/
├── ui/                        # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── TextInput.tsx

contexts/
├── AuthContext.tsx            # Authentication state
└── ThemeContext.tsx           # Theme and accessibility

hooks/
├── useProfile.ts              # User profile management
├── useOnboarding.ts           # Onboarding progress
├── useSubscription.ts         # RevenueCat integration
├── useJournal.ts              # Journal operations
└── useAnalytics.ts            # Usage analytics

lib/
├── supabase.ts                # Supabase client and helpers
├── database.ts                # Database operations
└── revenuecat.ts              # RevenueCat integration
```

## Key Features Implementation

### Onboarding Flow
1. **Welcome**: Introduction to neurodivergent-affirming values
2. **Income Tier**: Privacy-respecting income-based pricing
3. **Accessibility**: Font size, theme, and contrast preferences
4. **Privacy**: Granular data sharing permissions
5. **Personalization**: Focus areas, diagnoses, therapy goals
6. **Integrations**: Optional service connections
7. **Subscription**: RevenueCat-powered subscription flow

### Privacy Controls
- Explicit opt-in for each data type
- Transparent data usage dashboard
- Local processing when possible
- Full data export and deletion
- No third-party data selling

### Accessibility Features
- Scalable fonts (0.8x to 1.4x)
- High contrast mode
- Dark/light/system themes
- Reduced motion options
- Screen reader compatibility
- Neurodivergent-friendly interactions

## Development Notes

### Platform Considerations
- **Web**: Full functionality with mock RevenueCat
- **iOS/Android**: Requires native build for RevenueCat
- **Responsive**: Optimized for all screen sizes

### Data Flow
1. User authentication via Supabase Auth
2. Profile creation with RLS policies
3. Onboarding data saved to multiple tables
4. Real-time updates via Supabase subscriptions
5. Local state management with React hooks

### Security
- Row Level Security on all database tables
- JWT-based authentication
- Encrypted data transmission
- Privacy-first architecture

## Contributing

This project is designed to be neurodivergent-friendly in both usage and development:

- Clear, descriptive commit messages
- Comprehensive documentation
- Accessible code structure
- Inclusive development practices

## License

[License information to be added]

## Support

For support or questions about NeuroInsight, please [contact information to be added].

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
