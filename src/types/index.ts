import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';

// Dados dos sinais de Libras
export type ItemLibras = {
  id: string;
  titulo: string;
  descricao?: string;
  // Alterado para suportar tanto URL (string) quanto imagens locais via require()
  imagem?: string | ImageSourcePropType | any; 
  icone?: string;
};

// Rotas principais
export type RootStackParamList = {
  Welcome: undefined;
  MainApp: undefined;
  LearningPath: undefined;
  Login: undefined;
  List: { categoria: string };
  Detail: { item: ItemLibras };
  
  // Novas rotas da jornada de aprendizado do Alfabeto
  AlphabetLesson: undefined;
  ChallengeScreen: { bloco: number }; 
};

// Tipos de navegação (NavigationProps)
export type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainApp'>;
export type LearningPathNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LearningPath'>;
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

// Tipos de navegação das novas telas
export type AlphabetLessonNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AlphabetLesson'>;
export type ChallengeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChallengeScreen'>;

// Tipos de rotas para extrair os parâmetros recebidos (RouteProps)
export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
export type ChallengeScreenRouteProp = RouteProp<RootStackParamList, 'ChallengeScreen'>;