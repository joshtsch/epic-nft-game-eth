import { useEffect, useState } from "react";

const checkIfWalletIsConnected = async (cb: (account: string) => void) => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have MetaMask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);

        cb(account);
      } else {
        console.log("No authorized account found");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export function useCheckIfWalletIsConnected() {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);

  useEffect(() => {
    checkIfWalletIsConnected((account) => {
      setCurrentAccount(account);
    });
  }, []);

  return currentAccount;
}
