import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { daftarPertemuan } from '../data/staticData';

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
//  Halaman 2 — DAFTAR PERTEMUAN (FlatList)
//  Mengimplementasikan keempat props wajib:
//    1. keyExtractor
//    2. ItemSeparatorComponent
//    3. ListHeaderComponent
//    4. ListEmptyComponent
// ============================================================

// ── 1. ITEM CARD ────────────────────────────────────────────
function PertemuanItem({ item }) {
  return (
    <View style={styles.card}>
      {/* Icon Badge Pertemuan Ke- */}
      <View style={styles.badgeWrapper}>
        <View style={styles.pertemuanBadge}>
          <Text style={styles.pertemuanBadgeText}>P{item.pertemuanKe}</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.namaMatkul}>
          {item.mataKuliah}
        </Text>
        <Text style={styles.pertemuanKe}>Pertemuan Ke-{item.pertemuanKe}</Text>
        <Text style={styles.topik}>{item.topik}</Text>
        
        <View style={styles.divider} />

        <View style={styles.tanggalRow}>
          <Feather name="calendar" size={13} color={PALETTE.secondary} style={styles.tanggalIcon} />
          <Text style={styles.tanggal}>{item.tanggal}</Text>
        </View>
      </View>
    </View>
  );
}

// ── 2. PEMISAH ANTAR ITEM (ItemSeparatorComponent) ───────────
function Separator() {
  return (
    <View style={styles.separator}>
      <View style={styles.separatorLine} />
    </View>
  );
}

// ── 3. HEADER DAFTAR (ListHeaderComponent) ──────────────────
function ListHeader() {
  return (
    <View style={styles.listHeader}>
      <View style={styles.headerTitleRow}>
        <Feather name="list" size={28} color={PALETTE.primary} style={styles.headerIcon} />
        <Text style={styles.listHeaderTitle}>Daftar Pertemuan</Text>
      </View>
      
      <View style={styles.statsRow}>
        <View style={styles.statBadge}>
          <Feather name="layers" size={14} color={PALETTE.primary} style={styles.statIcon} />
          <Text style={styles.statValue}>{daftarPertemuan.length}</Text>
          <Text style={styles.statLabel}>Total Sesi</Text>
        </View>
        <View style={styles.statBadge}>
          <Feather name="activity" size={14} color={PALETTE.primary} style={styles.statIcon} />
          <Text style={styles.statValue}>Ganjil</Text>
          <Text style={styles.statLabel}>Semester</Text>
        </View>
        <View style={styles.statBadge}>
          <Feather name="clock" size={14} color={PALETTE.primary} style={styles.statIcon} />
          <Text style={styles.statValue}>2025</Text>
          <Text style={styles.statLabel}>Tahun</Text>
        </View>
      </View>
    </View>
  );
}

// ── 4. TAMPILAN KOSONG (ListEmptyComponent) ──────────────────
function EmptyList() {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyIconContainer}>
        <Feather name="folder-open" size={48} color={PALETTE.secondary} />
      </View>
      <Text style={styles.emptyTitle}>Belum Ada Pertemuan</Text>
      <Text style={styles.emptyDesc}>
        Data pertemuan perkuliahan masih kosong saat ini.
      </Text>
    </View>
  );
}

// ── MAIN SCREEN ──────────────────────────────────────────────
export default function PertemuanScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={PALETTE.background} />

      <FlatList
        data={daftarPertemuan}
        // ─── Prop 1: keyExtractor ───────────────────────────
        keyExtractor={(item) => item.id}
        // ─── Prop 2: ItemSeparatorComponent ─────────────────
        ItemSeparatorComponent={Separator}
        // ─── Prop 3: ListHeaderComponent ────────────────────
        ListHeaderComponent={ListHeader}
        // ─── Prop 4: ListEmptyComponent ─────────────────────
        ListEmptyComponent={EmptyList}
        renderItem={({ item }) => <PertemuanItem item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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

  // ── ListHeader
  listHeader: {
    backgroundColor: PALETTE.background,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerIcon: {
    marginRight: 10,
  },
  listHeaderTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: PALETTE.primary,
    letterSpacing: -0.5,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statBadge: {
    flex: 1,
    backgroundColor: PALETTE.white,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(3, 4, 94, 0.05)',
    shadowColor: PALETTE.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  statIcon: {
    marginBottom: 4,
    opacity: 0.8,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '800',
    color: PALETTE.primary,
  },
  statLabel: {
    fontSize: 10,
    color: PALETTE.textMuted,
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: '600',
  },

  // ── Item Card
  card: {
    flexDirection: 'row',
    backgroundColor: PALETTE.white,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    shadowColor: PALETTE.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(3, 4, 94, 0.05)',
  },
  badgeWrapper: {
    marginRight: 14,
    justifyContent: 'flex-start',
    paddingTop: 2,
  },
  pertemuanBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 180, 216, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pertemuanBadgeText: {
    fontSize: 13,
    fontWeight: '800',
    color: PALETTE.secondary,
  },
  cardBody: {
    flex: 1,
  },
  namaMatkul: {
    fontSize: 15,
    fontWeight: '700',
    color: PALETTE.textMain,
    marginBottom: 2,
  },
  pertemuanKe: {
    fontSize: 11,
    fontWeight: '700',
    color: PALETTE.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  topik: {
    fontSize: 13,
    color: PALETTE.textMuted,
    lineHeight: 18,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(100, 116, 139, 0.08)',
    marginBottom: 10,
  },
  tanggalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tanggalIcon: {
    marginRight: 6,
  },
  tanggal: {
    fontSize: 12,
    color: PALETTE.textMuted,
    fontWeight: '600',
  },

  // ── ItemSeparator
  separator: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'rgba(3, 4, 94, 0.03)',
    borderRadius: 1,
  },

  // ── ListEmpty
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  emptyIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 119, 182, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: PALETTE.primary,
    marginBottom: 6,
    textAlign: 'center',
  },
  emptyDesc: {
    fontSize: 13,
    color: PALETTE.textMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
});
