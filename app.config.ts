import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Owky - Own your keys',
  slug: 'owky',
  owner: 'charlietango8',
  version: '1.0.3',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#212529',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'xyz.owky.owky',
    buildNumber: '1.0.0',
    supportsTablet: false,
    infoPlist: {
      NSFaceIDUsageDescription: 'Authenticate with TouchId or FaceID.',
      NSCameraUsageDescription:
        'Owky needs camera permissions to be able to scan QR codes. You can turn it off in Settings if you change your mind.',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    sentry: {
      dsn: process.env.SENTRY_DSN,
    },
  },
  hooks: {
    postPublish: [
      {
        file: 'sentry-expo/upload-sourcemaps',
        config: {
          organization: process.env.SENTRY_ORG,
          project: process.env.SENTRY_PROJECT,
          authToken: process.env.SENTRY_AUTH_TOKEN,
        },
      },
    ],
  },
  plugins: ['sentry-expo'],
});
