import NavBar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import "../CSS/404.css";

const lanyardSocket = new WebSocket("wss://lanyard.aspy.dev/socket");

lanyardSocket.onopen = () => {
    lanyardSocket.send(
        JSON.stringify({
            op: 2,
            d: {
                subscribe_to_id: "516750892372852754",
            },
        }),
    );
};

async function DiscordStatus() {
    lanyardSocket.onmessage = async (event) => {
        const { d } = JSON.parse(event.data);
        if (d) {
            const { discord_user, discord_status, activities } = d;
            const user = {
                username: `${discord_user.username}#${discord_user.discriminator}`,
                avatar: discord_user.avatar,
                onlineStatus: discord_status,
                activities: activities,
                id: discord_user.id,
                textStatus: "",
            };
            if (user.avatar?.startsWith("a_")) {
                user.avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif`;
            } else {
                user.avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
            }
            const filteredActivities = [];
            for (const activity of user.activities) {
                if (activity.type === 4) {
                    user.textStatus = activity.state;
                } else {
                    filteredActivities.push(activity);
                }
            }
            user.activities = filteredActivities;
        }
    };
}

DiscordStatus(); // purely here so I can go to bed and not get an email that linting failed from github

export default function () {
    return (
        <>
            <div class='background' />
            <NavBar />

            <Footer github='about.jsx' />
        </>
    );
}
