import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class AboutUsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
          <ScrollView style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Welcome to the world's greatest ticket marketplace.</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.description}>
                At Key Populations Uganda, we believe in a multi-pronged approach to creating real change for minority groups and the LGBTIQ community in Uganda. Our efforts cover many initiatives and can continue to grow with continued support and resources
              </Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.version}>Version: 1.0.0</Text>
            </View>
          </ScrollView>
        );
    }
}

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  header: {
    padding: 5,
  },
  title: {
    fontSize: 18,
  },
  body: {
    padding: 5,
  },
  description: {
    fontSize: 15,
  },
  footer: {
    padding: 5,
  },
  version: {
    fontSize: 15,
  },
})