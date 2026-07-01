import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { mataKuliah } from '../data/staticData';

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

export default function RingkasanScreen() {
  const totalSKS = mataKuliah.reduce((acc, mk) => acc + mk.sks, 0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={PALETTE.background} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.headerTitleRow}>
          <Feather name="book-open" size={28} color={PALETTE.primary} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>Ringkasan Matkul</Text>
        </View>
        <Text style={styles.headerSub}>
          Semester Ganjil 2025/2026 · {mataKuliah.length} Mata Kuliah
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Dashboard Stats Card ── */}
        <View style={styles.summaryCard}>
          <View>
            <Text style={styles.summaryLabel}>Total SKS Diambil</Text>
            <Text style={styles.summaryValue}>{totalSKS} SKS</Text>
          </View>
          <View style={styles.summaryIconContainer}>
            <Feather name="pie-chart" size={24} color={PALETTE.primary} />
          </View>
        </View>

        {/* ── Section Title ── */}
        <Text style={styles.sectionTitle}>Mata Kuliah Semester Ini</Text>

        {/* ── List of Courses (.map()) ── */}
        {mataKuliah.map((mk) => (
          <View key={mk.id} style={styles.card}>
            <View style={styles.cardHeader}>
              {/* Badge Kode Matkul */}
              <View style={styles.kodeBadge}>
                <Feather name="hash" size={10} color={PALETTE.secondary} style={styles.badgeIcon} />
                <Text style={styles.kodeText}>{mk.kode}</Text>
              </View>
              {/* SKS Badge */}
              <View style={styles.sksBadge}>
                <Text style={styles.sksText}>{mk.sks} SKS</Text>
              </View>
            </View>

            {/* Nama Mata Kuliah */}
            <Text style={styles.namaMatkul}>{mk.nama}</Text>

            <View style={styles.divider} />

            {/* Dosen Pengampu */}
            <View style={styles.cardFooter}>
              <Feather name="user" size={14} color={PALETTE.textMuted} style={styles.footerIcon} />
              <Text style={styles.dosenText}>{mk.dosen}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: PALETTE.background,
  },

  // ── Header
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: PALETTE.background,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  headerIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: PALETTE.primary,
    letterSpacing: -0.5,
  },
  headerSub: {
    fontSize: 13,
    color: PALETTE.secondary,
    fontWeight: '600',
  },

  // ── Scroll Content
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  // ── Summary Card
  summaryCard: {
    backgroundColor: PALETTE.softBlue,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: PALETTE.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  summaryLabel: {
    fontSize: 14,
    color: PALETTE.primary,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: '800',
    color: PALETTE.primary,
  },
  summaryIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ── Section Title
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: PALETTE.secondary,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
    paddingLeft: 4,
  },

  // ── Card
  card: {
    backgroundColor: PALETTE.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: PALETTE.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(3, 4, 94, 0.05)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  kodeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PALETTE.background,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeIcon: {
    marginRight: 4,
  },
  kodeText: {
    fontSize: 11,
    fontWeight: '700',
    color: PALETTE.primary,
    letterSpacing: 0.5,
  },
  sksBadge: {
    backgroundColor: 'rgba(0, 180, 216, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  sksText: {
    fontSize: 11,
    fontWeight: '700',
    color: PALETTE.secondary,
  },
  namaMatkul: {
    fontSize: 17,
    fontWeight: '700',
    color: PALETTE.textMain,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(100, 116, 139, 0.08)',
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerIcon: {
    marginRight: 6,
  },
  dosenText: {
    fontSize: 13,
    color: PALETTE.textMuted,
    fontWeight: '500',
  },
});
