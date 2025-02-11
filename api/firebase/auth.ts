// firebase/auth.js
// TODO: MODIFICAR CON LO QUE DEVOLVIO CLAUDE, hay que cambiar las librerias que estamos usando
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

// Configurar Google Sign-In
GoogleSignin.configure({
  webClientId: 'TU_WEB_CLIENT_ID', // Obtener de la consola de Firebase
})

// Crear un nuevo usuario
const createUser = async (email, password, userData) => {
  try {
    // Crear usuario en Authentication
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    )
    const user = userCredential.user

    // Crear documento del usuario en Firestore
    await firestore()
      .collection('users')
      .doc(user.uid)
      .set({
        email: user.email,
        createdAt: firestore.FieldValue.serverTimestamp(),
        ...userData, // datos adicionales del usuario
      })

    return {
      success: true,
      user,
      message: 'Usuario creado exitosamente',
    }
  } catch (error) {
    let errorMessage = 'Error al crear usuario'

    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'El email ya está registrado'
        break
      case 'auth/invalid-email':
        errorMessage = 'Email inválido'
        break
      case 'auth/weak-password':
        errorMessage = 'La contraseña es muy débil'
        break
    }

    return {
      success: false,
      error: errorMessage,
    }
  }
}

// Login con email y password
const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    )

    // Obtener datos adicionales del usuario desde Firestore
    const userDoc = await firestore()
      .collection('users')
      .doc(userCredential.user.uid)
      .get()

    return {
      success: true,
      user: userCredential.user,
      userData: userDoc.data(),
      message: 'Login exitoso',
    }
  } catch (error) {
    let errorMessage = 'Error al iniciar sesión'

    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'Usuario no encontrado'
        break
      case 'auth/wrong-password':
        errorMessage = 'Contraseña incorrecta'
        break
      case 'auth/invalid-email':
        errorMessage = 'Email inválido'
        break
      case 'auth/user-disabled':
        errorMessage = 'Usuario deshabilitado'
        break
    }

    return {
      success: false,
      error: errorMessage,
    }
  }
}

// Login con Google
const signInWithGoogle = async () => {
  try {
    // Obtener credenciales de Google
    await GoogleSignin.hasPlayServices()
    const { idToken } = await GoogleSignin.signIn()

    // Crear credencial para Firebase
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    // Iniciar sesión en Firebase
    const userCredential = await auth().signInWithCredential(googleCredential)
    const user = userCredential.user

    // Verificar si el usuario ya existe en Firestore
    const userDoc = await firestore().collection('users').doc(user.uid).get()

    if (!userDoc.exists) {
      // Si es un nuevo usuario, crear su documento en Firestore
      await firestore().collection('users').doc(user.uid).set({
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: firestore.FieldValue.serverTimestamp(),
        provider: 'google',
      })
    }

    return {
      success: true,
      user,
      userData: userDoc.exists ? userDoc.data() : null,
      message: 'Login con Google exitoso',
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      error: 'Error al iniciar sesión con Google',
    }
  }
}

// Verificar si hay un usuario autenticado
export const checkAuthState = () => {
  return new Promise((resolve) => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        // Si hay usuario, obtener sus datos de Firestore
        const userDoc = await firestore()
          .collection('users')
          .doc(user.uid)
          .get()

        resolve({
          success: true,
          user,
          userData: userDoc.data(),
        })
      } else {
        resolve({
          success: false,
          user: null,
        })
      }
      unsubscribe()
    })
  })
}

// Cerrar sesión
const signOut = async () => {
  try {
    await auth().signOut()
    // Si el usuario usó Google Sign-In, también desconectamos de Google
    if (await GoogleSignin.isSignedIn()) {
      await GoogleSignin.signOut()
    }
    return {
      success: true,
      message: 'Sesión cerrada exitosamente',
    }
  } catch (error) {
    return {
      success: false,
      error: 'Error al cerrar sesión',
    }
  }
}

export const Authentication = {
  signOut,
  signInWithGoogle,
  createUser,
  loginWithEmail,
}
