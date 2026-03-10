import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useMemo, useState } from 'react';

const technologies = [
  { name: 'React', img: '/images/tech/react.svg' },
  { name: 'JavaScript', img: '/images/tech/js.svg' },
  { name: 'TypeScript', img: '/images/tech/ts.svg' },
  { name: 'Node.js', img: '/images/tech/node.svg' },
];

const projects = [
  {
    title: 'Plateforme e-commerce',
    image: '/images/projects/ecommerce.svg',
    short: 'Boutique en ligne moderne avec conversion optimisée.',
    details:
      'Stack React + API REST, optimisation performance, tunnel d\'achat et suivi analytics pour améliorer le chiffre d\'affaires.',
  },
  {
    title: 'Dashboard analytics',
    image: '/images/projects/analytics.svg',
    short: 'Visualisation KPI et reporting temps réel.',
    details:
      'Conception de tableaux de bord interactifs, filtres avancés, composants réutilisables et UX orientée prise de décision.',
  },
  {
    title: 'Application RH',
    image: '/images/projects/rh.svg',
    short: 'Gestion des congés, contrats et profils collaborateurs.',
    details:
      'Interface sécurisée, workflows d\'approbation, gestion documentaire et amélioration de la productivité des équipes RH.',
  },
];

const navLinks = ['about', 'technologies', 'projects', 'companies', 'contact'];

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgPage = useMemo(() => (colorMode === 'dark' ? '#060816' : '#f7f8ff'), [colorMode]);
  const textSoft = useMemo(() => (colorMode === 'dark' ? '#b3bee8' : '#4b577a'), [colorMode]);

  const openProject = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box bg={bgPage} minH="100vh" className="tailwind-root">
      <Box className="scroll-progress" />

      <Box as="header" position="sticky" top="0" zIndex="1000" className="sticky-glass">
        <Container maxW="7xl" py={3}>
          <Flex align="center" justify="space-between" gap={3}>
            <Heading size="md">Portfolio React</Heading>
            <HStack spacing={4} display={{ base: 'none', lg: 'flex' }}>
              {navLinks.map((item) => (
                <Link key={item} href={`#${item}`} className="nav-hover" textTransform="capitalize">
                  {item}
                </Link>
              ))}
            </HStack>
            <HStack>
              <IconButton
                aria-label="toggle mode"
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
              />
              <Button as="a" href="/CV.pdf" download colorScheme="purple">
                Télécharger CV
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="7xl" py={14}>
        <Grid templateColumns={{ base: '1fr', md: '1.3fr 1fr' }} gap={10} alignItems="center">
          <GridItem>
            <Badge colorScheme="purple" px={3} py={1} borderRadius="full">
              Développeur Frontend React
            </Badge>
            <Heading mt={4} size="2xl" lineHeight="1.1">
              Portfolio moderne avec Tailwind CSS + Chakra UI
            </Heading>
            <Text mt={4} color={textSoft} fontSize="lg">
              Design premium, sections claires, animation fluide et expérience utilisateur professionnelle.
            </Text>
            <HStack mt={6} spacing={3}>
              <Button colorScheme="blue" as="a" href="#projects">
                Voir mes projets
              </Button>
              <Button variant="outline" as="a" href="#contact">
                Me contacter
              </Button>
            </HStack>
          </GridItem>
          <GridItem>
            <Box className="avatar-wrap">
              <Image src="/images/avatar.svg" alt="Avatar" boxSize="260px" mx="auto" />
            </Box>
          </GridItem>
        </Grid>
      </Container>

      <Container maxW="7xl" className="section-block" id="about">
        <Heading size="lg">À propos de moi</Heading>
        <Text mt={3} color={textSoft}>
          J\'aide les entreprises à construire des interfaces web performantes, accessibles et élégantes.
        </Text>
      </Container>

      <Container maxW="7xl" className="section-block" id="technologies">
        <Heading size="lg">Technologies</Heading>
        <Grid templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }} gap={4} mt={5}>
          {technologies.map((tech) => (
            <GridItem key={tech.name} className="tech-card hover-rise">
              <Image src={tech.img} alt={tech.name} boxSize="52px" mx="auto" mb={2} />
              <Text textAlign="center" fontWeight="semibold">
                {tech.name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Container maxW="7xl" className="section-block" id="projects">
        <Heading size="lg">Projets</Heading>
        <Text color={textSoft} mt={2}>Cliquez sur un projet pour afficher les détails.</Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3,1fr)' }} gap={5} mt={5}>
          {projects.map((project) => (
            <GridItem key={project.title} className="project-card hover-rise" onClick={() => openProject(project)}>
              <Image src={project.image} alt={project.title} borderRadius="12px" />
              <Heading size="md" mt={3}>{project.title}</Heading>
              <Text mt={2} color={textSoft}>{project.short}</Text>
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Container maxW="7xl" className="section-block" id="companies">
        <Heading size="lg">Entreprises où j’ai travaillé</Heading>
        <HStack mt={4} spacing={3} flexWrap="wrap">
          {['TechNova', 'Digital Factory', 'Cloud Solutions', 'FinEdge'].map((company) => (
            <Badge key={company} px={4} py={2} borderRadius="full" className="hover-rise">
              {company}
            </Badge>
          ))}
        </HStack>
      </Container>

      <Container maxW="7xl" className="section-block" id="contact" pb={16}>
        <Heading size="lg">Contact</Heading>
        <Stack as="form" action="mailto:contact@monportfolio.dev" method="post" encType="text/plain" spacing={3} mt={4}>
          <input className="input-ui" type="text" name="nom" placeholder="Nom" required />
          <input className="input-ui" type="email" name="email" placeholder="Email" required />
          <textarea className="input-ui" name="message" placeholder="Votre message" rows="5" required />
          <Button type="submit" colorScheme="purple" alignSelf="flex-start">Envoyer email</Button>
        </Stack>
      </Container>

      <Box as="footer" textAlign="center" py={6} borderTop="1px solid" borderColor="whiteAlpha.300">
        <Text color={textSoft}>© {new Date().getFullYear()} Portfolio React</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedProject?.image && <Image src={selectedProject.image} alt={selectedProject.title} mb={4} borderRadius="md" />}
            <Text>{selectedProject?.details}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
