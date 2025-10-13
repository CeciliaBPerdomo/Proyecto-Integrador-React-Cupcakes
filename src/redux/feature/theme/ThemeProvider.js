// features/theme/ThemeProvider.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './themeSlice';
import { themeColors } from '../../../styles/Theme';

const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isBlueMode = useSelector((state) => state.theme.isBlueMode);

  useEffect(() => {
    // Cargar tema desde localStorage al inicializar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'blue') {
      dispatch(setTheme(true));
    }
  }, [dispatch]);

  useEffect(() => {
    // Aplicar estilos CSS variables según el tema
    const currentTheme = isBlueMode ? 'blue' : 'light';
    const colors = themeColors[currentTheme];
    
    // Aplicar las variables CSS al root
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Guardar en localStorage
    localStorage.setItem('theme', currentTheme);
    
    // Aplicar data-theme attribute para styled-components
    root.setAttribute('data-theme', currentTheme);
  }, [isBlueMode]);

  return children;
};

export default ThemeProvider;