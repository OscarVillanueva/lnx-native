import {useState, useEffect} from 'react';
import {useColorScheme, StyleSheet} from 'react-native';

const useTheme = () => {
  // Sacamos el tema que esta usando el sistema
  const scheme = useColorScheme();

  // State para el tema
  const [theme, setTheme] = useState({});

  useEffect(() => {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },

      content: {
        flex: 1,
        marginHorizontal: '2.5%',
      },

      button: {
        backgroundColor: '#ffda00',
      },

      textButton: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000',
      },

      img: {
        width: '100%',
        height: 300,
      },

      price: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: scheme === 'light' ? '#1a202c' : '#edf2f7',
      },

      label: {
        color: scheme === 'light' ? '#1a202c' : '#edf2f7',
        fontSize: 18,
      },

      title: {
        color: scheme === 'light' ? '#1a202c' : '#edf2f7',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 30,
      },

      background: {
        backgroundColor: scheme === 'light' ? '#f7fafc' : '#718096',
      },
    });

    setTheme(styles);
  }, [scheme]);

  return theme;
};

export default useTheme;
