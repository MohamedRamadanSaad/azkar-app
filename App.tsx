import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DAILY_GOAL = 100;

export default function App() {
  const [count, setCount] = useState(0);
  const progress = Math.min(count / DAILY_GOAL, 1);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <View style={styles.brandMark}>
          <Text style={styles.brandMarkText}>ذ</Text>
        </View>
        <Text style={styles.brandName}>وِرد</Text>
      </View>

      <View style={styles.intro}>
        <Text style={styles.eyebrow}>لَحْظَةُ سَكِينَة</Text>
        <Text style={styles.title}>أذكار اليوم</Text>
        <Text style={styles.subtitle}>اجعل لسانك رطبًا بذكر الله</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTopRow}>
          <View style={styles.todayBadge}>
            <Text style={styles.todayBadgeText}>وِرد اليوم</Text>
          </View>
          <Text style={styles.cardKicker}>الذِّكر المختار</Text>
        </View>

        <Text style={styles.dhikr}>
          سُبْحَانَ اللَّهِ وَبِحَمْدِهِ
        </Text>
        <Text style={styles.dhikrNote}>ردّدها بهدوء وطمأنينة</Text>

        <View style={styles.counterRow}>
          <Text style={styles.counterTotal}>/ {DAILY_GOAL}</Text>
          <Text style={styles.counterNumber}>{count}</Text>
        </View>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>
        <Text style={styles.progressLabel}>
          {count >= DAILY_GOAL ? 'أحسنت، أتممت وِردك اليوم' : `أكملت ${Math.round(progress * 100)}٪ من هدفك`}
        </Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="أضف تسبيحة"
          onPress={() => setCount((current) => Math.min(current + 1, DAILY_GOAL))}
          style={({ pressed }) => [styles.countButton, pressed && styles.buttonPressed]}
        >
          <Text style={styles.countButtonPlus}>+</Text>
          <Text style={styles.countButtonText}>سَبِّح</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="إعادة العداد إلى الصفر"
          onPress={() => setCount(0)}
          style={styles.resetButton}
        >
          <Text style={styles.resetText}>إعادة العداد</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerDivider} />
        <Text style={styles.footerText}>طُمَأْنِينَةٌ لِقَلْبِكَ، ذِكْرٌ لِلَّهِ</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F4EE',
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 16,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    gap: 9,
  },
  brandMark: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#174B3A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandMarkText: {
    color: '#F6E8BD',
    fontSize: 19,
    fontWeight: '700',
    writingDirection: 'rtl',
  },
  brandName: {
    color: '#174B3A',
    fontSize: 17,
    fontWeight: '700',
    writingDirection: 'rtl',
  },
  intro: {
    alignItems: 'flex-end',
    marginTop: 48,
    marginBottom: 25,
  },
  eyebrow: {
    color: '#A37B36',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    writingDirection: 'rtl',
  },
  title: {
    color: '#163D32',
    fontSize: 34,
    fontWeight: '700',
    marginTop: 8,
    writingDirection: 'rtl',
  },
  subtitle: {
    color: '#777B70',
    fontSize: 15,
    marginTop: 6,
    writingDirection: 'rtl',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E9E7DE',
    borderWidth: 1,
    borderRadius: 28,
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 18,
    alignItems: 'center',
    shadowColor: '#1F3529',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
    elevation: 3,
  },
  cardTopRow: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  todayBadge: {
    borderRadius: 20,
    backgroundColor: '#F4F0E4',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  todayBadgeText: {
    color: '#82642E',
    fontSize: 12,
    fontWeight: '700',
    writingDirection: 'rtl',
  },
  cardKicker: {
    color: '#8B8D83',
    fontSize: 13,
    writingDirection: 'rtl',
  },
  dhikr: {
    color: '#174B3A',
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 46,
    marginTop: 27,
    textAlign: 'center',
    writingDirection: 'rtl',
  },
  dhikrNote: {
    color: '#92948B',
    fontSize: 13,
    marginTop: 3,
    writingDirection: 'rtl',
  },
  counterRow: {
    alignItems: 'baseline',
    flexDirection: 'row',
    gap: 6,
    marginTop: 23,
  },
  counterTotal: {
    color: '#9A9B92',
    fontSize: 16,
  },
  counterNumber: {
    color: '#1A4336',
    fontSize: 48,
    fontWeight: '600',
    fontVariant: ['tabular-nums'],
  },
  progressTrack: {
    alignSelf: 'stretch',
    height: 6,
    borderRadius: 6,
    backgroundColor: '#EDEEE7',
    overflow: 'hidden',
    marginTop: 5,
  },
  progressFill: {
    height: '100%',
    borderRadius: 6,
    backgroundColor: '#B08B4C',
  },
  progressLabel: {
    color: '#86897F',
    fontSize: 12,
    marginTop: 9,
    writingDirection: 'rtl',
  },
  countButton: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#174B3A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 23,
    shadowColor: '#174B3A',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.97 }],
  },
  countButtonPlus: {
    color: '#EAD7A7',
    fontSize: 30,
    fontWeight: '300',
    lineHeight: 32,
  },
  countButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 2,
    writingDirection: 'rtl',
  },
  resetButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 8,
  },
  resetText: {
    color: '#81847A',
    fontSize: 13,
    textDecorationLine: 'underline',
    textDecorationColor: '#C7C8C1',
    writingDirection: 'rtl',
  },
  footer: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 22,
  },
  footerDivider: {
    width: 34,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#C9B889',
    marginBottom: 11,
  },
  footerText: {
    color: '#A09F93',
    fontSize: 11,
    letterSpacing: 0.5,
    writingDirection: 'rtl',
  },
});
