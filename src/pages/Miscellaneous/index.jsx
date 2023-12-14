import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import Container from "@components/Container";
import Input from "@components/Input";
import Checkbox from "@components/Checkbox";

export default function Miscellaneous() {
    const { config, setConfig } = useContext(ConfigContext);

    return (
        <>
            <Container header={{
                big: "Miscellaneous",
                small: <>
                    Miscellaneous settings for your Blacket server.
                </>
            }}>

                <Input icon="fas fa-colon" placeholder="Server Port" onChange={(e) => {
                    if (e.target.value.match(/[^0-9]/gi) || e.target.value > 65535 || e.target.value.startsWith("0")) return e.preventDefault();
                    config.miscellaneous_server_port = e.target.value;
                    setConfig({ ...config });
                }} value={config.miscellaneous_server_port} />

                <Input icon="fab fa-discord" placeholder="Discord Invite" onChange={(e) => {
                    if (e.target.value.match(/[^a-z0-9]/gi)) return e.preventDefault();
                    config.miscellaneous_discord_invite = e.target.value;
                    setConfig({ ...config });
                }} value={config.miscellaneous_discord_invite} />

                <Checkbox checked={config.miscellaneous_verbose_logging} onClick={() => {
                    config.miscellaneous_verbose_logging = !config.miscellaneous_verbose_logging;
                    setConfig({ ...config });
                }}>
                    Verbose Logging
                </Checkbox>

                <Checkbox checked={config.miscellaneous_block_proxies} onClick={() => {
                    config.miscellaneous_block_proxies = !config.miscellaneous_block_proxies;
                    setConfig({ ...config });
                }}>
                    Block Proxies
                </Checkbox>

                <Checkbox checked={config.miscellaneous_allow_multiple_accounts} onClick={() => {
                    config.miscellaneous_allow_multiple_accounts = !config.miscellaneous_allow_multiple_accounts;
                    setConfig({ ...config });
                }}>
                    Allow Multiple Accounts
                </Checkbox>

                <Checkbox checked={config.miscellaneous_backup_enabled} onClick={() => {
                    config.miscellaneous_backup_enabled = !config.miscellaneous_backup_enabled;
                    setConfig({ ...config });
                }}>
                    Enable Backups
                </Checkbox>

                {config.miscellaneous_backup_enabled && <>
                    <Input icon="fas fa-clock" placeholder="Backup Interval" onChange={(e) => {
                        if (e.target.value.match(/[^0-9]/gi) || e.target.value.startsWith("0")) return e.preventDefault();
                        config.miscellaneous_backup_interval = e.target.value;
                        setConfig({ ...config });
                    }} value={config.miscellaneous_backup_interval} />
                </>}

                <Input icon="fas fa-turn-up" placeholder="Level Difficulty" onChange={(e) => {
                    if (isNaN(e.target.value)) return e.preventDefault();
                    config.miscellaneous_level_difficulty = e.target.value;
                    setConfig({ ...config });
                }} value={config.miscellaneous_level_difficulty} />
            </Container>
        </>
    )
}