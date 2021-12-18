const CONTRACT_ADDRESS = "0xA84bbA16729651ac055210835a7b9Cc648d0dBEA";

export interface CharacterData {
  name: string;
  imageURI: string;
  hp: string;
  maxHp: string;
  attackDamage: string;
}

const transformCharacterData = ({
  name,
  imageURI,
  hp,
  maxHp,
  attackDamage,
}: CharacterData) => {
  return {
    name: name,
    imageURI: imageURI,
    hp: +hp,
    maxHp: +maxHp,
    attackDamage: +attackDamage,
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };
