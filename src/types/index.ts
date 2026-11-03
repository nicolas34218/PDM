import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type ItemLibras = {
    id: string;
    titulo: string;
    descricao?: string;
    imagem?: string;
    icone?: string;
};

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    MainApp: undefined;
    List: { categoria: string };
    Detail: { item: ItemLibras };
};

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Welcome"
>;
export type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Login"
>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "MainApp"
>;
export type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;
