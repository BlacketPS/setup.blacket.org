import { useContext } from "react";
import { ConfigContext } from "@stores/config";
import Container from "@components/Container";
import Select from "@components/Select";
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
                    config.miscellaneous.server_port = e.target.value;
                    setConfig({ ...config });
                }} value={config.miscellaneous.server_port} />

                <Input icon="fab fa-discord" placeholder="Discord Invite" onChange={(e) => {
                    if (e.target.value.match(/[^a-z0-9]/gi)) return e.preventDefault();
                    config.miscellaneous.discord_invite = e.target.value;
                    setConfig({ ...config });
                }} value={config.miscellaneous.discord_invite} />

                <Checkbox checked={config.miscellaneous.verbose_logging} onClick={() => {
                    config.miscellaneous.verbose_logging = !config.miscellaneous.verbose_logging;
                    setConfig({ ...config });
                }}>
                    Verbose Logging
                </Checkbox>

                <Checkbox checked={config.miscellaneous.block_proxies} onClick={() => {
                    config.miscellaneous.block_proxies = !config.miscellaneous.block_proxies;
                    setConfig({ ...config });
                }}>
                    Block Proxies
                </Checkbox>

                <Checkbox checked={config.miscellaneous.allow_multiple_accounts} onClick={() => {
                    config.miscellaneous.allow_multiple_accounts = !config.miscellaneous.allow_multiple_accounts;
                    setConfig({ ...config });
                }}>
                    Allow Multiple Accounts
                </Checkbox>

                <Checkbox checked={config.miscellaneous.backup_enabled} onClick={() => {
                    config.miscellaneous.backup_enabled = !config.miscellaneous.backup_enabled;
                    setConfig({ ...config });
                }}>
                    Enable Backups
                </Checkbox>

                {config.miscellaneous.backup_enabled && <>
                    <Input icon="fas fa-clock" placeholder="Backup Interval" onChange={(e) => {
                        if (e.target.value.match(/[^0-9]/gi) || e.target.value.startsWith("0")) return e.preventDefault();
                        config.miscellaneous.backup_interval = e.target.value;
                        setConfig({ ...config });
                    }} value={config.miscellaneous.backup_interval} />
                </>}

                <Input icon="fas fa-turn-up" placeholder="Level Difficulty" onChange={(e) => {
                    if (isNaN(e.target.value)) return e.preventDefault();
                    config.miscellaneous.level_difficulty = e.target.value;
                    setConfig({ ...config });
                }} value={config.miscellaneous.level_difficulty} />
            </Container>
        </>
    )
}