import { Container, Grid, Image, Input } from "semantic-ui-react"
import Link from "next/link"


export default function TopBar() {
    return(
        <div className="top-bar">
            <Container>
                <Grid className="top-bar">
                    <Grid.Column width={8} className="top-bar__left">
                       <Logo />
                    </Grid.Column>
                    <Grid.Column width={8} className="top-bar__right">
                        <Search />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
function Logo() {
    const logo = '/TropicalMitchLimon_Logo.svg';
    return (
        <Link href="/">
            <Image src={logo} alt="Tropical Mitch Limon" />
        </Link>

    )
}

function Search() {
    return (
        <Input
            id="search-game"
            icon={{ name: "search" }}
        />
    )
}