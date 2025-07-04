// Welcome screen with floating background brain images and gradient overlay
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.root}>
      <LinearGradient colors={["#6A00F4", "#C950F6"]} style={StyleSheet.absoluteFill} />

      {/* Floating Brain Backgrounds */}
      <Image source={require('../../assets/images/brain.png')} style={[styles.floating, styles.brain1]} />
      <Image source={require('../../assets/images/brain.png')} style={[styles.floating, styles.brain2]} />
      <Image source={require('../../assets/images/brain.png')} style={[styles.floating, styles.brain3]} />
      <Image source={require('../../assets/images/brain.png')} style={[styles.floating, styles.brain4]} />
      <Image source={require('../../assets/images/brain.png')} style={[styles.floating, styles.brain5]} />
      <Image source={require('../../assets/images/brain.png')} style={[styles.floating, styles.brain6]} />

      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.logo}
      />

      <View style={styles.contentBox}>
        <Text style={styles.title}>Welcome to NeuroInsight</Text>
        <Text style={styles.subtitle}> An AI pesrsonal assistant designed for Neurodivergent Minds</Text>

        <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/(auth)/login')}>
          <Text style={styles.primaryText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/(auth)/signup')}>
          <Text style={styles.secondaryText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 120,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 40,
    borderRadius: 24,
    backgroundColor: '#fff',
    padding: 10,
    zIndex: 1,
  },
  contentBox: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    zIndex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 14,
    textAlign: 'center',
  },
  subtitle: {
    color: '#DDD',
    fontSize: 16,
    marginBottom: 36,
    textAlign: 'center',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  primaryText: {
    color: '#C950F6',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#fff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  floating: {
    position: 'absolute',
    opacity: 0.2,
    resizeMode: 'contain',
  },
  brain1: {
    top: 40,
    left: -20,
    width: 160,
    height: 160,
    transform: [{ rotate: '15deg' }],
  },
  brain2: {
    bottom: 80,
    right: -10,
    width: 120,
    height: 120,
    transform: [{ rotate: '-10deg' }],
  },
  brain3: {
    top: height / 2.5,
    left: width / 2 - 100,
    width: 140,
    height: 140,
    transform: [{ rotate: '5deg' }],
  },

  brain4: {
    top: height * 0.7,
    left: 30,
    width: 100,
    height: 100,
    transform: [{ rotate: '8deg' }],
  },
  brain5: {
    top: height * 0.1,
    right: -40,
    width: 130,
    height: 130,
    transform: [{ rotate: '-12deg' }],
  },
  brain6: {
    bottom: 40,
    left: width * 0.25,
    width: 90,
    height: 90,
    transform: [{ rotate: '3deg' }],
  },
});