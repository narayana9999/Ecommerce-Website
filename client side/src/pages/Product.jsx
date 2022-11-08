import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container= styled.div`

`;

const Wrapper= styled.div`
padding: 50px;
display: flex;
${mobile({padding:"10px", flexDirection:"column"})}

`;
const ImgContainer= styled.div`
flex: 1;
`;
const Image= styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height:"40px"})}

`;
const InfoContainer= styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding:"10px"})}

`;
const Title= styled.h1`
font-weight: 200;
`;
const Desc= styled.p`
margin: 20px 0px
`;
const Price= styled.span`
font-weight: 100;
font-size: 40px;
`;

const FilterContainer= styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content:space-between;
${mobile({width:"100%"})}

`;
const Filter = styled.div`
display: flex;
align-items: center;
`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;
const FilterSizeOption= styled.option`

`;
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const AmountContainer = styled.div`
display:flex;
align-items: center;
font-weight:700;
${mobile({width:"100%"})}

`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal; 
display:flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4; 
}
`;

const Product = ()=> {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                 <Image src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Shirt</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure iusto facilis veniam aut minus voluptates tenetur, voluptatibus beatae? Et nihil aspernatur enim repellendus odio accusamus ut error nam, ab magni.</Desc>
                    <Price>999/-</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>SL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product