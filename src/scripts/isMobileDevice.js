import { ref } from 'vue'

// Reaktiv variabel som uppdateras baserat på skärmstorlek
const isMobileDevice = ref(window.innerWidth <= 768)

// Uppdatera värdet vid fönsterstorleksändring
const handleResize = () => {
  isMobileDevice.value = window.innerWidth <= 768
}

// Starta lyssnare direkt
window.addEventListener('resize', handleResize)

// Exportera så den kan användas överallt
export default isMobileDevice
