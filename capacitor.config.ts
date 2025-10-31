import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'app.danielberg.werewolf',
    appName: 'Werewolf Narrador',
    webDir: 'www',
    server: {
        androidScheme: 'https'
    },
    version: '2.0.0',
    android: {
        versionCode: 2
    }
};

export default config;
