import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import CarouselIndex from '../Components/CarouselIndex';
import { Searchbar, Chip, Button } from 'react-native-paper';
import useJobAdvertisements from '../hooks/usejobadvertisements';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../styles/colors';

export default function HomeScreen({ navigation }) {
  const jobs = useJobAdvertisements();
  const jobCount = jobs.length ?? 0;
  const [searchQuery, setSearchQuery] = useState('');
  const carouselJobs = jobs ? jobs.slice(0, 3).map((j) => j.jobAdvertisement) : [];

  const onJobCountPress = () => {
    navigation.navigate('Jobs');
  };

  const onSubmitSearch = () => navigation.navigate('Jobs', { searchQuery });

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <ImageBackground
        source={require('../assets/sky-g79e40b0ac_1280.png')}
        style={styles.container}
      >
        <Text style={styles.headertext}>Hae</Text>
        <Text style={styles.headertext2}>TYÖPAIKKAA</Text>

        <Searchbar
          style={styles.input}
          onChangeText={setSearchQuery}
          onSubmitEditing={onSubmitSearch}
          onIconPress={onSubmitSearch}
          value={searchQuery}
          placeholder="Tehtävänimike, sijainti, työavain..."
        />
        <View style={styles.buttonrow}>
          <Chip
            onPress={() => navigation.navigate('Jobs', { buttonJobQuery: 'Kokoaikatyö' })}
            compact
            style={styles.chip}
          >
            Kokoaikatyö
          </Chip>
          <Chip
            onPress={() => navigation.navigate('Jobs', { buttonJobQuery: 'Osa-aikatyö' })}
            compact
            style={styles.chip}
          >
            Osa-aikatyö
          </Chip>
          <Chip
            onPress={() => navigation.navigate('Jobs', { buttonJobQuery: 'Kesätyö' })}
            compact
            style={styles.chip}
          >
            Kesätyö
          </Chip>
        </View>
        <View style={styles.buttonrow}>
          <Chip
            onPress={() => navigation.navigate('Jobs', { buttonJobQuery: 'Harjoittelu' })}
            style={styles.chip}
            compact
          >
            Harjoittelu
          </Chip>
          <Chip
            compact
            contentStyle={{ flexDirection: 'row-reverse' }}
            style={styles.chip}
            icon="filter"
          >
            LISÄÄ RAJAUKSIA
          </Chip>
        </View>
        <Text compact style={styles.chip2} onPress={onJobCountPress}>
          <Text style={{ fontWeight: '700' }}>{jobCount}</Text> avointa työpaikkaa
        </Text>
        <Text style={styles.circle}></Text>
      </ImageBackground>
      <View style={styles.row}>
        <View>
          <Text style={styles.carouselheader}>Sinulle suositellut</Text>
          <Text style={styles.carouselheader}>työpaikat</Text>
        </View>
        <Button
          contentStyle={{ flexDirection: 'row-reverse' }}
          mode="text"
          style={styles.chip}
          icon="target"
        >
          PAIKANNA
        </Button>
      </View>
      <CarouselIndex navigation={navigation} carouselJobs={carouselJobs} />
      <ImageBackground source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imageBG}>
        <View style={styles.centerText}>
          <View style={styles.containerAdd}>
            <Text style={{ color: colors.surface }}>Keikkatöihin</Text>
          </View>
          <View style={styles.containerAdd}>
            <Text style={{ color: colors.surface }}>Avoin hakemus</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.containerNews}>
        <Text>Uutiset ja Tapahtumat</Text>
        <Text style={styles.heading}>Kuntarekryssä näkyy ja tapahtuu</Text>
        <ImageBackground
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.imageBG2}
        ></ImageBackground>
        <Text>Profiili kesäkuntoon</Text>
        <Text>
          Kesä ja helteet ovat löytäneet Suomen. Siksi voi olla vaikeaa asennoitua vaikkapa
          työnhakuun...
        </Text>
        <View style={styles.buttonrow}>
          <Chip style={styles.chip}>Ajankohtaista</Chip>
          <Chip style={styles.chip}>Tapahtumat</Chip>
        </View>
        <View style={styles.buttonrow}>
          <Chip style={styles.chip}>Työelämä</Chip>
          <Chip style={styles.chip}>Töitä hakemassa</Chip>
        </View>
        <View style={styles.buttonrow}>
          <Chip style={styles.chip}>Näytä kaikki uutiset</Chip>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bgPicture: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  buttonrow: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  carouselheader: {
    color: 'black',
    fontSize: 24,
    fontWeight: '400',
  },
  carouselheader2: {
    color: '#35A9DB',
    fontSize: 13,
    fontWeight: '700',
  },
  centerText: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  chip: {
    marginHorizontal: '2%',
    margin: 5,
  },
  chip2: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    color: '#006B96',
    fontSize: 16,
    marginTop: 40,
    padding: 14,
    zIndex: 1,
  },
  circle: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 21,
    overflow: 'hidden',
    position: 'absolute',
    top: 360,
    transform: [{ scaleX: 10 }],
    width: 42,
  },

  container: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    paddingTop: 16,
  },
  containerAdd: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    margin: 12,
    padding: 12,
    width: '88%',
  },
  containerNews: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 12,
  },
  headertext: {
    color: 'white',
    fontSize: 28,
    fontWeight: '400',
    textAlign: 'center',
  },
  headertext2: {
    color: 'white',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 1,
  },
  heading: {
    fontSize: 16,
  },
  imageBG: {
    height: 400,
    width: '100%',
  },
  imageBG2: {
    height: 200,
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    height: 45,
    marginTop: 38,
    margin: 12,
    width: '88%',
  },
  jobsContainer: {
    backgroundColor: colors.background,
    padding: 12,
  },
  jobsOrganisation: {
    fontSize: 12,
    marginTop: 12,
  },
  jobsTitle: {
    fontSize: 20,
  },
  row: {
    alignItems: 'baseline',
    backgroundColor: colors.background,
    flexDirection: 'row',
    padding: 26,
  },
});
