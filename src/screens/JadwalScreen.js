import React from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { jadwalMingguan } from '../data/staticData';

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

// ============================================================
//  Halaman 3 — JADWAL PER HARI (SectionList)
//  - Section header bergaya berbeda dari item biasa
//  - Setiap item menampilkan: nama mata kuliah, ruangan, jam
// ============================================================

// ── SECTION HEADER (bergaya berbeda dari item biasa) ─────────
function SectionHeader({ section }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.hariIconContainer}>
        <Feather name="calendar" size={16} color={PALETTE.primary} />
      </View>
      <View>
        <Text style={styles.hariText}>{section.hari}</Text>
        <Text style={styles.hariSubText}>
          {section.data.length} Sesi Perkuliahan
        </Text>
      </View>
    </View>
  );
}

// ── ITEM JADWAL ──────────────────────────────────────────────
function JadwalItem({ item }) {
  return (
    <View style={styles.itemCard}>
      {/* Jam (Kiri) */}
      <View style={styles.jamContainer}>
        <Feather name="clock" size={12} color={PALETTE.secondary} style={styles.jamIcon} />
        <Text style={styles.jamText}>{item.jamMulai}</Text>
        <View style={styles.jamDivider} />
        <Text style={styles.jamText}>{item.jamSelesai}</Text>
      </View>

      {/* Info Kuliah */}
      <View style={styles.itemInfo}>
        <Text style={styles.itemNama}>{item.nama}</Text>
        <View style={styles.ruanganRow}>
          <Feather name="map-pin" size={12} color={PALETTE.textMuted} style={styles.ruanganIcon} />
          <Text style={styles.ruanganText}>{item.ruangan}</Text>
        </View>
      </View>

      {/* Indikator Aksen Kanan */}
      <View style={styles.itemAccent} />
    </View>
  );
}

// ── HEADER UTAMA (di atas seluruh SectionList) ───────────────
function ListHeader() {
  const totalMatkul = jadwalMingguan.reduce((acc, s) => acc + s.data.length, 0);
  return (
    <View style={styles.listHeader}>
      <View style={styles.headerTitleRow}>
        <Feather name="activity" size={28} color={PALETTE.primary} style={styles.headerIcon} />
        <Text style={styles.listHeaderTitle}>Jadwal per Hari</Text>
      </View>
      <Text style={styles.listHeaderSub}>
        {totalMatkul} sesi · {jadwalMingguan.length} hari aktif perkuliahan
      </Text>
    </View>
  );
}

// ── MAIN SCREEN ──────────────────────────────────────────────
export default function JadwalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={PALETTE.background} />

      <SectionList
        sections={jadwalMingguan}
        keyExtractor={(item) => item.id}
        // ─── Section Header — gaya BERBEDA dari item biasa ──
        renderSectionHeader={({ section }) => (
          <SectionHeader section={section} />
        )}
        // ─── Render setiap item jadwal ───────────────────────
        renderItem={({ item }) => (
          <JadwalItem item={item} />
        )}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: PALETTE.background,
  },
  listContent: {
    paddingBottom: 32,
  },

  // ── List Header (atas seluruh list)
  listHeader: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: PALETTE.background,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 10,
  },
  listHeaderTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: PALETTE.primary,
    letterSpacing: -0.5,
  },
  listHeaderSub: {
    fontSize: 13,
    color: PALETTE.secondary,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 8,
  },

  // ── Section Header (nama hari) — berbeda dari item biasa
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(202, 240, 248, 0.95)', // Background color matches PALETTE.background with opacity
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderLeftWidth: 4,
    borderLeftColor: PALETTE.primary,
    gap: 10,
  },
  hariIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: PALETTE.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: PALETTE.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  hariText: {
    fontSize: 15,
    fontWeight: '800',
    color: PALETTE.primary,
    letterSpacing: 0.2,
  },
  hariSubText: {
    fontSize: 10,
    color: PALETTE.textMuted,
    fontWeight: '600',
    marginTop: 1,
  },

  // ── Item Jadwal (berbeda dari section header)
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: PALETTE.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(3, 4, 94, 0.05)',
  },

  // Jam (kiri)
  jamContainer: {
    width: 76,
    paddingVertical: 14,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(100, 116, 139, 0.08)',
    justifyContent: 'center',
  },
  jamIcon: {
    marginBottom: 4,
  },
  jamText: {
    fontSize: 11,
    fontWeight: '700',
    color: PALETTE.textMain,
  },
  jamDivider: {
    width: 12,
    height: 1,
    backgroundColor: 'rgba(100, 116, 139, 0.15)',
    marginVertical: 3,
  },

  // Info kuliah (tengah)
  itemInfo: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  itemNama: {
    fontSize: 15,
    fontWeight: '700',
    color: PALETTE.textMain,
    marginBottom: 6,
  },
  ruanganRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ruanganIcon: {
    marginRight: 4,
  },
  ruanganText: {
    fontSize: 12,
    color: PALETTE.textMuted,
    fontWeight: '500',
  },

  // Aksen warna kanan
  itemAccent: {
    width: 5,
    alignSelf: 'stretch',
    backgroundColor: PALETTE.accent,
  },
});
