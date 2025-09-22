import { Keplr } from "@keplr-wallet/types";
declare global {
    interface Window {
        keplr?: Keplr;
    }
}
export declare const getKeplrFromWindow: () => Promise<Keplr | undefined>;
