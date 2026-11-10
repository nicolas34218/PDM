
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// Dados dos sinais de Libras
export type ItemLibras = {
  id: string;
  titulo: string;
  descricao?: string;
  imagem?: string;
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
};

// Tipos de navegação
export type WelcomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList, 'MainApp'>;

export type LearningPathNavigationProp =
  NativeStackNavigationProp<RootStackParamList, 'LearningPath'>;

export type DetailScreenRouteProp =
  RouteProp<RootStackParamList, 'Detail'>;
