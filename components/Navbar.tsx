import links from '../constants/links'

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>Website Name</h1>
      </div>
      <ul>
        {
          links.map((link, i) => {
            return (
              <li key={i}>{link.title}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Navbar