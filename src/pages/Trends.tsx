import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import ICONS from '../assets/images/_index';
// import { Ionicons } from '@expo/vector-icons';

const PopulationInsightsScreen: React.FC = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <Image source={ICONS.search} style={{height:30,width:30,tintColor:'#fff'}} />
      <Image source={ICONS.heart} style={{height:30,width:30,tintColor:'#fff'}} />
      </View>

      {/* Title and Population */}
      <View style={styles.insightsContainer}>
        <Text style={styles.title}>US population Insights</Text>
        <Text style={styles.population}>331,097,593</Text>
        <Text style={styles.change}>
          +20,879,99 <Text style={styles.percentage}>(56%)</Text> since 17 Jun 2019
        </Text>
      </View>

      {/* Chart */}
      <LineChart
        data={{
          labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [
            {
              data: [310000000, 320000000, 325000000, 331097593, 335000000, 340000000],
            },
          ],
        }}
        width={screenWidth - 40}
        height={220}
        withDots
        withInnerLines={false}
        withShadow={false}
        chartConfig={{
          backgroundGradientFrom: '#000',
          backgroundGradientTo: '#000',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
          labelColor: () => '#fff',
        }}
        bezier
        style={styles.chart}
      />

      {/* Key Statistics */}
      <ScrollView contentContainerStyle={styles.statisticsContainer}>
        <Text style={styles.statisticsTitle}>Key statistics</Text>
        <View style={styles.statisticsCards}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>2019 to 2022</Text>
            <Text style={styles.cardValue}>+1,372,112</Text>
            <Text style={styles.cardSubtitle}>0.41% increase</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>2019 to 2024</Text>
            <Text style={styles.cardValue}>+1,372,112</Text>
            <Text style={styles.cardSubtitle}>5.41% increase</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {/* <Ionicons name="home" size={24} color="#fff" />
        <Ionicons name="trending-up" size={24} color="#fff" /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  insightsContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  population: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  change: {
    fontSize: 16,
    color: '#0f0',
  },
  percentage: {
    fontWeight: 'bold',
  },
  chart: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  statisticsContainer: {
    padding: 16,
  },
  statisticsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  statisticsCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  card: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
    width: '48%',
  },
  cardTitle: {
    fontSize: 14,
    color: '#aaa',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#0f0',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#111',
  },
});

export default PopulationInsightsScreen;
