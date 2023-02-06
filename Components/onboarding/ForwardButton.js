import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function ForwardButton({ onPress }) {
  const { t } = useTranslation();

  return (
    <Button
      uppercase
      mode="contained"
      icon="arrow-right"
      contentStyle={styles.contentStyle}
      style={styles.style}
      onPress={onPress}
    >
      {t('welcome.forward')}
    </Button>
  );
}

const styles = StyleSheet.create({
  contentStyle: { flexDirection: 'row-reverse', height: 50, width: 150 },
  style: { zIndex: 1 },
});
