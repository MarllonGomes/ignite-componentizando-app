import {Button} from "./Button";

interface SidebarProps {
    genres: Array<{
        id: number;
        name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
        title: string;
    }>,
    selectedGenreId: number,
    onClickGenreCB(id: number): void
}

export function SideBar({genres, onClickGenreCB, selectedGenreId}: SidebarProps) {

    return (
        <nav className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
                {genres.map(genre => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => onClickGenreCB(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>

        </nav>
    )
}