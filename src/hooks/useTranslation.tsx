import { localizationManager } from "base/dependencies/managers";
import { Keys } from "base/localization/Keys";

const useTranslation = () => {
  return [
    (key: Keys): string => {
      return localizationManager.translate(key);
    },
  ];
};

export default useTranslation;
