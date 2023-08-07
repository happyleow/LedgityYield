export const displayedErrors: { [key: string]: string } = {
  // From Ownable.sol
  "Ownable: caller is not the owner": "Only contract owner can call this",

  // From APRHistory.sol
  L1: "Cursor index overflow",
  L2: "Cursor index overflow",
  L3: "Pack index out of bounds",
  L4: "Cursor index not written yet",
  L5: "No APR yet",
  L6: "No checkpoint yet",
  L7: "Latest pack not full yet",

  // GlobalOwnableUpgradeable.sol
  L8: "Change global owner instead",
  L65: "Renounce global owner instead",

  // GlobalRestrictableUpgradeable.sol
  L9: "Forbidden",

  // RecoverableUpgradeable.sol
  L10: "Amount is zero",
  L11: "Not enough tokens to recover",

  // InvestUpgradeable.sol
  L62: "A redirection is already active",
  L12: "From cannot be zero address",
  L13: "To cannot be zero address",
  L14: "Cannot be the same address",
  L15: "Forbidden",
  L16: "From cannot be zero address",
  L17: "To cannot be zero address",
  L18: "Forbidden",
  L19: "Not redirected",

  // GlobalBlacklist.sol
  L20: "Cannot blacklist zero address",

  // LDYStaking.sol
  L21: "Use recoverLDY() instead",
  L22: "Nothing to recover",
  L23: "Fueled amount cannot be 0",
  L24: "Nothing to unlock",
  L25: "Staked amount cannot be 0",
  L26: "Insufficient LDY balance",
  L27: "Unstaked amount cannot be 0",
  L28: "Insufficient LDY stake",
  L29: "Lock period not ended",
  L30: "No rewards yet",
  L31: "Insufficient rewards reserve",
  L32: "No rewards yet",
  L33: "Insufficient rewards reserve",
  L34: "Tier cannot be 0",
  L35: "Amount cannot be greater than next tier one",
  L36: "Amount cannot be lower than previous tier one",
  L37: "Tier cannot be 0",
  L38: "Tier doesn't exist",

  // LToken.sol
  L39: "Restricted to withdrawer",
  L40: "Restricted to fund",
  L41: "Retention rate must be <= 10%",
  L63: "Cannot be zero address",
  L64: "Cannot be zero address",
  L42: "Listener contract not found",
  L43: "Use recoverUnderlying() instead",
  L44: "Nothing to recover",
  L45: "Use instantWithdrawal() or requestWithdrawal() instead",
  L46: "Use deposit() instead",
  L47: "Insufficient balance",
  L48: "Insufficient balance",
  L49: "Please queue your request",
  L50: "Forbidden",
  L51: "Not a big request",
  L52: "Insufficient funds",
  L53: "Insufficient balance",
  L54: "Amount exceeds max withdrawal amount",
  L55: "Must attach 0.004 ETH as processing fees",
  L56: "Failed fees forward",
  L57: "Request doesn't belong to you",
  L58: "Insufficient balance",
  L59: "Retention rate exceeded",
  L60: "Nothing to claim yet",
  L61: "Insufficient funds",
};

export const prettyErrorMessage = (error: Error) => {
  let prettyError = "An unknown error occurred";
  //@ts-ignore
  let details = error.details;
  if (details) {
    // If ethjs-query error
    if (details.startsWith("[ethjs-query]")) {
      details = details.replace("[ethjs-query] while formatting outputs from RPC '", "");
      details = details.slice(0, -1);
      const errObj = JSON.parse(details);
      prettyError = errObj.value.data.message;
    } else prettyError = details.split("'")[1];
  } else if (error.message) prettyError = error.message;

  // If the error has a displayed override, use it instead
  const displayOverride = displayedErrors[prettyError];
  if (displayOverride) prettyError = displayOverride;
  return prettyError;
};
