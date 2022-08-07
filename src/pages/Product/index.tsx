import { Box, Flex, SimpleGrid, Text} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Header } from '../../components/Header';
import ProductService from "../../services/ProductService";

function Products() {
const [ products, setProducts ] = useState<any[]>([]);

  useEffect (() => {
    ProductService.list().then(
      (response) => {
        setProducts(response.products)
      },
      (error) => {
        console.log("error");
      }
    );
  }, [])  

  return (
    <Flex direction="column">
    <Header />

    <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

      <SimpleGrid flex="1" gap="4" minChildWidth="320px">
        {products.map((product: any) => (
          <Box 
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
            key={product.id}          
          >
              <Text 
                fontSize="lg" 
                fontWeight="bold"
                color="white"
                mb="4" 
              >
                {product.title}
              </Text>
              <Text 
                fontSize="lg" 
                color="gray"
                mb="4" 
              >
                {product.description}
              </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  </Flex>
  );
}

export default Products;
