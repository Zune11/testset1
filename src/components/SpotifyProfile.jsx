import { Card, CardContent, Typography, Box } from "@mui/material";
export default function SpotifyProfile({ music }) {
    if (!music) {
        return (
            <Box sx={{ mt: 3 }}>
                <Typography>
                    Please select a music from the table
                </Typography>
            </Box>
        );
    }
    return (
        <Box sx={{ mt: 3}}>
            <Card>
                <CardContent>
                    <Typography variant="h7">
                        Music Information
                    </Typography>
                    <Typography>
                        Track Title: {music.title}
                    </Typography>
                    <Typography>
                        Genre: {music.genre}
                    </Typography>
                    <Typography>
                        Artist: {music.artist}
                    </Typography>
                    <Typography>
                        BPM: {music.bpm}
                    </Typography>
                    <Typography>
                        Record Label: {music.label}
                    </Typography>
                    <Typography>
                        User Role: {music.role}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}