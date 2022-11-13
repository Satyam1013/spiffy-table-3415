import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Text,
  Flex,
  Image,
  Box,
  Heading,
  Stack,
  useBreakpointValue,
  MenuButton,
  MenuItem,
  Menu,
  MenuList,
  Spacer,
  Input
} from "@chakra-ui/react";

export default function SimpleGridExample() {
  return (
    <>
      <Text p="7px" fontSize="15px" bg="#e6e6e6">
        You can now pay with cryptocurrency on FARFETCH | Select it at the
        checkout | T&Cs apply
      </Text>
      <Box
        display="flex"
        justifyContent="space-between"
        mt="20px"
        alignItems="center"
      >
        <Box ml="40px" display="flex" gap="1rem">
          <Text fontWeight="bold">Women</Text>
          <Text fontWeight="bold">Men</Text>
          <Text fontWeight="bold">Kids</Text>
        </Box>

        <Heading fontSize="35px" fontFamily="sans-serif" fontWeight="bold">
          FARFETCH
        </Heading>
        <Box mr="40px" display="flex" gap="13px">
          <Image
            width="35px"
            height="25px"
            src="https://tse3.mm.bing.net/th?id=OIP.xQkGylUPlIh97Lj2yIsxWgHaFj&pid=Api&P=0"
          />
          <Image
            width="30px"
            height="25px"
            src="https://tse4.mm.bing.net/th?id=OIP.lnw-YAhsNmUy36i94EslIQHaHa&pid=Api&P=0"
          />
          <Image
            mt="3px"
            width="25px"
            height="20px"
            src="https://tse3.mm.bing.net/th?id=OIP.SnUY5SkoKivOPKBLZhjtjwHaGp&pid=Api&P=0"
          />
          <Image
            mt="1px"
            width="25px"
            height="20px"
            src="https://tse2.mm.bing.net/th?id=OIP._DqFYoiWvEAMeA8OF5ApbAHaIH&pid=Api&P=0"
          />
        </Box>
      </Box>
      <Box width="100%">
        <Flex mt="20px" marginLeft="40px" gap="20px" fontSize="15px">
          <Menu>
            <MenuButton mt="-30px" rightIcon={<ChevronDownIcon />}>
              Gifts
            </MenuButton>
            <MenuList>
              <Box display="grid" gridTemplateColumns="170px 190px 190px">
                <div>
                  GIFTS BY STYLE
                  <MenuItem>Classic</MenuItem>
                  <MenuItem>Glamour</MenuItem>
                  <MenuItem>Modern</MenuItem>
                  <MenuItem>Streetwear</MenuItem>
                </div>
                <div>
                  GIFTS BY CATEGORY
                  <MenuItem>The season's most wanted</MenuItem>
                  <MenuItem>Gifts that are too good</MenuItem>
                  <MenuItem>Homewear to love</MenuItem>
                  <MenuItem>Logo Accessories</MenuItem>
                  <MenuItem>99 Hype Speakers</MenuItem>
                </div>
                <div>
                  GIFTS BY DESIGNER
                  <MenuItem>Alexander McQueen Balenciaga</MenuItem>
                  <MenuItem>Balenciaga</MenuItem>
                  <MenuItem>Burberry</MenuItem>
                  <MenuItem>Gucci</MenuItem>
                  <MenuItem>Fendi</MenuItem>
                  <MenuItem>Off-White</MenuItem>
                  <MenuItem>Versace</MenuItem>
                  <MenuItem>Valentino Garavani</MenuItem>
                </div>
              </Box>
            </MenuList>
          </Menu>

          <Text>New In</Text>
          <Text>Brands</Text>
          <Text>Clothing</Text>
          <Text>Shoes</Text>
          <Text>Bags</Text>
          <Text>Accessories</Text>
          <Text>Jewellery</Text>
          <Text>Pre Owned</Text>
          <Text color="red">Sale</Text>
          <Spacer />
          <Input width="150px" placeholder="Search" mr="20px" />
        </Flex>
      </Box>
      <Box display="flex" mt="40px">
        <Box ml="50px" mt="100px" mr="10px">
          <Heading width="400px">
            DANCEFLOOR READY: THE HOTTEST PARTY SHOES
          </Heading>
          <Text width="500px">
            Statement boots, power platforms and trending mules - unbox this
            season's best styles
          </Text>
        </Box>
        <Box>
          <Image
            height="600px"
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043494/data/58e1561d985820f6ff52f3b45e321414/1x1_messaging-side/637/data.jpeg"
          />
        </Box>
      </Box>
      <Box>
        <Box>
          <Image src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4044254/data/59a98681fd23768264f5cf97e716c880/1x1_two-columns/637/data.jpeg" />
          <Text fontSize="18px" width="50%">
            NEW GOLDEN GOOSE FOR YOUR GIFT LIST Explore the latest star-patched
            sneaker silhouettes, including the retro-inspired Ball Star and the
            refreshed Super-Star Sabot
          </Text>
        </Box>
      </Box>
    </>
  );
}
