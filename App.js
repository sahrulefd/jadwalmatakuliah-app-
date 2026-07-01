import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

import RingkasanScreen from './src/screens/RingkasanScreen';
import PertemuanScreen from './src/screens/PertemuanScreen';
import JadwalScreen    from './src/screens/JadwalScreen';

const Tab = createBottomTabNavigator();

// Color Palette
const PALETTE = {
  primary: '#03045E',
  secondary: '#0077B6',
  accent: '#00B4D8',
  softBlue: '#90E0EF',
  background: '#CAF0F8',
  white: '#FFFFFF',
  textMain: '#1D2A44',
  textMuted: '#64748B',
};

// ─── Konfigurasi ikon & label per tab (Menggunakan Feather Icons) ───
const TAB_CONFIG = {
  Ringkasan: {
    icon:  'book-open',
    label: 'Ringkasan',
  },
  Pertemuan: {
    icon:  'list',
    label: 'Pertemuan',
  },
  Jadwal: {
    icon:  'calendar',
    label: 'Jadwal',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => {
          const cfg = TAB_CONFIG[route.name];
          return {
            // ─── Navbar Putih dengan Sedikit Shadow ──────────────────
            headerStyle: {
              backgroundColor: PALETTE.white,
              shadowColor: PALETTE.primary,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 3,
              elevation: 3,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(3, 4, 94, 0.05)',
            },
            headerTitleStyle: {
              color: PALETTE.primary,
              fontWeight: '800',
              fontSize: 18,
            },
            headerTitleAlign: 'center',

            // ─── Tab Bar Navigasi ────────────────────────────────────
            tabBarStyle: {
              backgroundColor: PALETTE.white,
              borderTopColor: 'rgba(3, 4, 94, 0.08)',
              borderTopWidth: 1,
              height: 64,
              paddingBottom: 8,
              paddingTop: 4,
              shadowColor: PALETTE.primary,
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.03,
              shadowRadius: 4,
              elevation: 4,
            },
            tabBarActiveTintColor:   PALETTE.secondary,
            tabBarInactiveTintColor: PALETTE.textMuted,
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '700',
              marginTop: 2,
            },

            // ─── Ikon Tab ────────────────────────────────────
            tabBarIcon: ({ color }) => (
              <Feather
                name={cfg?.icon}
                size={20}
                color={color}
              />
            ),
          };
        }}
      >
        <Tab.Screen
          name="Ringkasan"
          component={RingkasanScreen}
          options={{ title: 'Jadwal Kuliah', tabBarLabel: 'Ringkasan' }}
        />
        <Tab.Screen
          name="Pertemuan"
          component={PertemuanScreen}
          options={{ title: 'Daftar Pertemuan', tabBarLabel: 'Pertemuan' }}
        />
        <Tab.Screen
          name="Jadwal"
          component={JadwalScreen}
          options={{ title: 'Jadwal Mingguan', tabBarLabel: 'Jadwal' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
