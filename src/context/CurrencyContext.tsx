import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

type CurrencyCode =
  | "USD"
  | "INR"
  | "EUR"
  | "GBP"
  | "JPY"
  | "AED"
  | "CAD"
  | "AUD"
  | "SGD";

type Currency = {
  code: CurrencyCode;
  symbol: string;
  flag: string;
  label: string;
};

type CurrencyContextType = {
  currency: Currency;
  currencies: Currency[];
  setCurrency: (currency: Currency) => void;
  formatPrice: (usdAmount: number) => string;
  rates: Record<string, number>;
};

const currencies: Currency[] = [
  {
    code: "USD",
    symbol: "$",
    flag: "🇺🇸",
    label: "US Dollar",
  },
  {
    code: "INR",
    symbol: "₹",
    flag: "🇮🇳",
    label: "Indian Rupee",
  },
  {
    code: "EUR",
    symbol: "€",
    flag: "🇪🇺",
    label: "Euro",
  },
  {
    code: "GBP",
    symbol: "£",
    flag: "🇬🇧",
    label: "British Pound",
  },
  {
    code: "JPY",
    symbol: "¥",
    flag: "🇯🇵",
    label: "Japanese Yen",
  },
  {
    code: "AED",
    symbol: "د.إ",
    flag: "🇦🇪",
    label: "UAE Dirham",
  },
  {
    code: "CAD",
    symbol: "C$",
    flag: "🇨🇦",
    label: "Canadian Dollar",
  },
  {
    code: "AUD",
    symbol: "A$",
    flag: "🇦🇺",
    label: "Australian Dollar",
  },
  {
    code: "SGD",
    symbol: "S$",
    flag: "🇸🇬",
    label: "Singapore Dollar",
  },
];

const CurrencyContext =
  createContext<CurrencyContextType | null>(
    null
  );

export function CurrencyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currency, setCurrency] =
    useState<Currency>(currencies[0]);

  const [rates, setRates] = useState<
    Record<string, number>
  >({
    USD: 1,
  });

  useEffect(() => {
    async function fetchRates() {
      try {
        const response = await fetch(
          "https://open.er-api.com/v6/latest/USD"
        );

        const data = await response.json();

        setRates(data.rates);
      } catch (error) {
        console.error(
          "Currency fetch failed",
          error
        );
      }
    }

    fetchRates();
  }, []);

  const formatPrice = (
    usdAmount: number
  ) => {
    const rate =
      rates[currency.code] || 1;

    const converted =
      usdAmount * rate;

    return new Intl.NumberFormat(
      "en-US",
      {
        style: "currency",
        currency: currency.code,
        maximumFractionDigits: 0,
      }
    ).format(converted);
  };

  const value = useMemo(
    () => ({
      currency,
      currencies,
      setCurrency,
      formatPrice,
      rates,
    }),
    [currency, rates]
  );

  return (
    <CurrencyContext.Provider
      value={value}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context =
    useContext(CurrencyContext);

  if (!context) {
    throw new Error(
      "useCurrency must be used inside CurrencyProvider"
    );
  }

  return context;
}