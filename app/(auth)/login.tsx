// login.tsx – glassmorphism with styled background and NeuroInsight logo
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.background}>
      <LinearGradient
        colors={['#d1aaff', '#c950f6', '#6a6dff']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      {/* Floating brain images */}
      <Image
        source={require('../../assets/images/brain.png')}
        style={[styles.floatingBrain, { top: 40, left: 20, opacity: 0.18, width: 90, height: 90, transform: [{ rotate: '-10deg' }] }]}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/images/brain.png')}
        style={[styles.floatingBrain, { top: 120, right: 28, opacity: 0.15, width: 120, height: 120, transform: [{ rotate: '17deg' }] }]}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/images/brain.png')}
        style={[styles.floatingBrain, { bottom: 80, left: 36, opacity: 0.17, width: 110, height: 110, transform: [{ rotate: '7deg' }] }]}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/images/brain.png')}
        style={[styles.floatingBrain, { bottom: 30, right: 22, opacity: 0.16, width: 85, height: 85, transform: [{ rotate: '-15deg' }] }]}
        resizeMode="contain"
      />
      <View style={styles.overlay}>
        <Image source={require('../../assets/images/icon.png')} style={styles.logo} />
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ede7fa"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ede7fa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => alert('Password reset flow coming soon')}>
            <Text style={{ color: '#ede7fa', fontSize: 13, textAlign: 'right', marginBottom: 16 }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => router.replace('/(auth)/signup')}>
            <Text style={{ color: '#fff', marginTop: 20, textAlign: 'center', fontSize: 15 }}>
              Don’t have an account? <Text style={{ fontWeight: 'bold', color: '#fff' }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#d1aaff',
  },
  overlay: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(30, 10, 60, 0.13)',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 20,
    resizeMode: 'contain',
    marginBottom: 40,
    backgroundColor: '#fff',
    padding: 10,
    zIndex: 1,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 28,
    padding: 32,
    alignItems: 'stretch',
    shadowColor: '#c950f6',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.13,
    shadowRadius: 24,
    elevation: 10,
    // For web: backdropFilter: 'blur(16px)'
  },
  input: {
    height: 54,
    backgroundColor: 'rgba(255,255,255,0.28)',
    borderRadius: 14,
    paddingHorizontal: 18,
    marginBottom: 18,
    color: '#2d184a',
    fontSize: 17,
    fontWeight: '500',
    borderWidth: 1.2,
    borderColor: 'rgba(201,80,246,0.14)',
  },
  button: {
    backgroundColor: '#C950F6',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#6a6dff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.13,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  floatingBrain: {
    position: 'absolute',
    zIndex: 0,
    // width, height, top/left/right set inline
  },
});