// signup.tsx – Styled to match welcome screen with linear gradient and consistent UI
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace('./login');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#6A00F4", "#C950F6"]}
        style={styles.container}
      >
        <Image source={require('../../assets/images/icon.png')} style={styles.logo} />
        <Image source={require('../../assets/images/brain.png')} style={[styles.floating, styles.brain1]} />
        <Image source={require('../../assets/images/brain.png')} style={[styles.floating, styles.brain2]} />
        <Image source={require('../../assets/images/brain.png')} style={[styles.floating, styles.brain3]} />
        <View style={styles.card}>
          <Text style={styles.title}>Create Your Account</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.replace('/(auth)/login')}>
            <Text style={{ color: '#fff', marginTop: 20, textAlign: 'center', fontSize: 15 }}>
              Already have an account? <Text style={{ fontWeight: 'bold', color: '#fff' }}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 100,
    justifyContent: 'flex-start',
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#C950F6',
    fontWeight: '600',
    fontSize: 16,
  },
  floating: {
    position: 'absolute',
    opacity: 0.2,
    resizeMode: 'contain',
  },
  brain1: {
    top: 30,
    left: 10,
    width: 100,
    height: 100,
    transform: [{ rotate: '12deg' }],
  },
  brain2: {
    bottom: 60,
    right: 20,
    width: 120,
    height: 120,
    transform: [{ rotate: '-10deg' }],
  },
  brain3: {
    top: 200,
    right: 40,
    width: 110,
    height: 110,
    transform: [{ rotate: '7deg' }],
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    padding: 10,
    zIndex: 1,
  },
});