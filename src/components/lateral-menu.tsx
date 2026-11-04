'use client'

// Next imports
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default function LateralMenu() {
  library.add(fas)
  const currentPath = usePathname()
  return (
    <div>
      <span className="text-muted fs-5">Contenus</span>
      <Nav variant="pills" className="flex-column mt-2" activeKey={currentPath}>
        <Nav.Item>
          <Nav.Link className="ps-2" href="/livres" as={Link}>
            <FontAwesomeIcon size='xl' icon={['fas', 'book']} />
            <span className="ms-2">Livres</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="ps-2" href="/films" as={Link}>
            <FontAwesomeIcon height="24px" size='xl' icon={['fas', 'clapperboard']} />
            <span className="ms-2">Films</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="ps-2" href="/series" as={Link}>
            <FontAwesomeIcon height="24px" size='xl' icon={['fas', 'tv']} />
            <span className="ms-2">Séries</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="ps-2" href="/blogs" as={Link}>
            <FontAwesomeIcon height="24px" size='xl' icon={['fas', 'blog']} />
            <span className="ms-2">Articles de blog</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}