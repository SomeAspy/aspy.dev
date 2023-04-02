import './navbar.component.css';

function NavItem(props) {
    return <a href={props.link}>{props.name}</a>;
}

export default function NavBar() {
    return (
        <div class='nav-bar'>
            <NavItem link='/' name='Home' />
            <NavItem link='/projects' name='Projects' />
            <NavItem link='/about' name='About' />
            <NavItem link='https://blog.aspy.dev' name='Blog' />
        </div>
    );
}
