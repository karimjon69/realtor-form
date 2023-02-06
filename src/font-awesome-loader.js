import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouseFlag } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const loadIcons = () => {
  library.add(faHouseFlag);
  library.add(faCartShopping);
  library.add(faHandshake);
  library.add(faMagnifyingGlass);
}

export default loadIcons;