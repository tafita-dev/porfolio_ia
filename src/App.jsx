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
  VStack,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import {
  AiOutlineAntDesign,
  AiOutlineCode,
  AiOutlineMobile,
  AiOutlineThunderbolt,
} from 'react-icons/ai';
import { MdDarkMode, MdInsights, MdLightMode, MdWorkOutline } from 'react-icons/md';

const MotionBox = motion(Box);

const technologies = [
  { name: 'React', icon: AiOutlineAntDesign, level: 'Expert' },
  { name: 'JavaScript', icon: AiOutlineCode, level: 'Avancé' },
  { name: 'TypeScript', icon: MdInsights, level: 'Avancé' },
  { name: 'Node.js', icon: AiOutlineMobile, level: 'Intermédiaire+' },
];

const projects = [
  {
    title: 'Plateforme e-commerce Luxe',
    image: '/images/projects/ecommerce.svg',
    short: 'Expérience premium orientée conversion et storytelling produit.',
    details:
      'Refonte complète du front avec animations légères, pages ultra-rapides, composants réutilisables et tunnel d\'achat optimisé.',
    stack: 'React, Chakra UI, Tailwind, API REST',
  },
  {
    title: 'Pulse Analytics Dashboard',
    image: '/images/projects/analytics.svg',
    short: 'Pilotage des KPI business avec visualisation claire en temps réel.',
    details:
      'Système de filtres avancé, navigation fluide, design system interne et composants orientés performance.',
    stack: 'TypeScript, Recharts, React Query',
  },
  {
    title: 'RH Flow Platform',
    image: '/images/projects/rh.svg',
    short: 'Gestion RH digitalisée avec workflow d’approbation intelligent.',
    details:
      'Module profils collaborateurs, congés, documents, et analytics RH avec UX simplifiée pour équipes non techniques.',
    stack: 'React, Node.js, PostgreSQL',
  },
];

const timeline = [
  { period: '2024 - Maintenant', role: 'Frontend React Developer', company: 'FinEdge' },
  { period: '2022 - 2024', role: 'UI Engineer', company: 'Cloud Solutions' },
  { period: '2020 - 2022', role: 'Web Integrator', company: 'Digital Factory' },
];

const navLinks = ['about', 'technologies', 'projects', 'companies', 'contact'];

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgPage = useMemo(() => (colorMode === 'dark' ? '#050816' : '#f6f7fc'), [colorMode]);
  const textSoft = useMemo(() => (colorMode === 'dark' ? '#b5c0e9' : '#4a567c'), [colorMode]);
  const cardBg = useMemo(() => (colorMode === 'dark' ? 'rgba(12,18,40,0.75)' : 'rgba(255,255,255,0.8)'), [colorMode]);

  const openProject = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <MotionBox bg={bgPage} minH="100vh" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <Box className="bg-aurora aurora-1" />
      <Box className="bg-aurora aurora-2" />

      <Box as="header" position="sticky" top="0" zIndex="1000" className="sticky-glass">
        <Container maxW="7xl" py={3}>
          <Flex align="center" justify="space-between" gap={3}>
            <Heading size="md" letterSpacing="wide">
              Portfolio Vedette
            </Heading>

            <HStack spacing={5} display={{ base: 'none', lg: 'flex' }}>
              {navLinks.map((item) => (
                <Link key={item} href={`#${item}`} className="nav-hover" textTransform="capitalize" fontSize="sm">
                  {item}
                </Link>
              ))}
            </HStack>

            <HStack>
              <IconButton
                aria-label="toggle mode"
                icon={colorMode === 'dark' ? <MdLightMode /> : <MdDarkMode />}
                onClick={toggleColorMode}
                variant="ghost"
              />
              <Button as="a" href="/CV.pdf" download colorScheme="purple" size="sm">
                Télécharger CV
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <Grid templateColumns={{ base: '1fr', md: '1.15fr 0.85fr' }} gap={10} alignItems="center">
          <GridItem>
            <Badge colorScheme="purple" px={3} py={1} borderRadius="full">
              Frontend Engineer • React Ecosystem
            </Badge>
            <Heading mt={5} size="2xl" lineHeight="1.05" className="hero-title">
              Je crée des interfaces haut de gamme inspirées des meilleurs portfolios.
            </Heading>
            <Text mt={5} color={textSoft} fontSize="lg" maxW="720px">
              Direction artistique moderne, animations maîtrisées, UX claire et code maintenable :
              un rendu premium adapté à votre image professionnelle.
            </Text>

            <HStack mt={7} spacing={3}>
              <Button colorScheme="blue" as="a" href="#projects" rightIcon={<AiOutlineThunderbolt />}>
                Explorer mes projets
              </Button>
              <Button variant="outline" as="a" href="#contact">
                Démarrer un projet
              </Button>
            </HStack>

            <HStack mt={7} spacing={6} flexWrap="wrap">
              <VStack align="start" spacing={0}>
                <Text fontSize="2xl" fontWeight="800">+32</Text>
                <Text color={textSoft} fontSize="sm">Projets livrés</Text>
              </VStack>
              <VStack align="start" spacing={0}>
                <Text fontSize="2xl" fontWeight="800">4 ans</Text>
                <Text color={textSoft} fontSize="sm">Expérience produit</Text>
              </VStack>
              <VStack align="start" spacing={0}>
                <Text fontSize="2xl" fontWeight="800">95%</Text>
                <Text color={textSoft} fontSize="sm">Satisfaction client</Text>
              </VStack>
            </HStack>
          </GridItem>

          <GridItem>
            <Box className="hero-panel" bg={cardBg}>
              <Box className="avatar-wrap">
                <Image src="/images/avatar.svg" alt="Avatar" boxSize="230px" mx="auto" />
              </Box>
              <Text mt={4} textAlign="center" fontWeight="700">Votre Développeur Frontend</Text>
              <Text mt={1} textAlign="center" color={textSoft} fontSize="sm">
                React • UI/UX • Performance • Design System
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      <Container maxW="7xl" id="about" className="section-block">
        <Grid templateColumns={{ base: '1fr', lg: '1.2fr 0.8fr' }} gap={8}>
          <GridItem>
            <Heading size="lg">À propos de moi</Heading>
            <Text mt={3} color={textSoft}>
              Mon approche combine sens du détail visuel et rigueur technique. J\'adapte les codes
              des portfolios d\'élite pour créer une identité forte, claire et mémorable.
            </Text>
            <Stack mt={6} spacing={4}>
              {timeline.map((item) => (
                <Flex key={item.period} className="timeline-item" align="center" gap={3}>
                  <Box className="timeline-dot">
                    <MdWorkOutline />
                  </Box>
                  <Box>
                    <Text fontWeight="700">{item.role}</Text>
                    <Text fontSize="sm" color={textSoft}>
                      {item.company} • {item.period}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Stack>
          </GridItem>

          <GridItem>
            <Box className="quote-card" bg={cardBg}>
              <Text fontSize="sm" color={textSoft} mb={3}>
                Témoignage client
              </Text>
              <Text fontSize="lg" fontWeight="700">
                “Un niveau d\'exécution visuelle exceptionnel et une livraison très propre techniquement.”
              </Text>
              <Text mt={4} color={textSoft}>— Product Lead, TechNova</Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      <Container maxW="7xl" id="technologies" className="section-block">
        <Heading size="lg">Technologies</Heading>
        <Grid templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }} gap={4} mt={5}>
          {technologies.map((tech) => {
            const TechIcon = tech.icon;
            return (
              <GridItem key={tech.name} className="tech-card hover-rise" bg={cardBg}>
                <Box fontSize="34px" display="flex" justifyContent="center" mb={2} color="purple.300">
                  <TechIcon />
                </Box>
                <Text textAlign="center" fontWeight="700">
                  {tech.name}
                </Text>
                <Text textAlign="center" color={textSoft} fontSize="xs" mt={1}>
                  {tech.level}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Container>

      <Container maxW="7xl" id="projects" className="section-block">
        <Heading size="lg">Projets</Heading>
        <Text color={textSoft} mt={2}>
          Sélection premium — cliquez sur une carte pour voir le détail.
        </Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3,1fr)' }} gap={5} mt={5}>
          {projects.map((project) => (
            <GridItem
              key={project.title}
              className="project-card hover-rise"
              bg={cardBg}
              onClick={() => openProject(project)}
            >
              <Image src={project.image} alt={project.title} borderRadius="12px" />
              <Heading size="md" mt={3}>
                {project.title}
              </Heading>
              <Text mt={2} color={textSoft}>
                {project.short}
              </Text>
              <Text mt={3} fontSize="xs" color="purple.300" fontWeight="700">
                {project.stack}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Container maxW="7xl" id="companies" className="section-block">
        <Heading size="lg">Entreprises où j’ai travaillé</Heading>
        <HStack mt={4} spacing={3} flexWrap="wrap">
          {['TechNova', 'Digital Factory', 'Cloud Solutions', 'FinEdge', 'StartX'].map((company) => (
            <Badge key={company} px={4} py={2} borderRadius="full" className="hover-rise" bg={cardBg}>
              {company}
            </Badge>
          ))}
        </HStack>
      </Container>

      <Container maxW="7xl" id="contact" className="section-block" pb={16}>
        <Heading size="lg">Contact</Heading>
        <Text mt={2} color={textSoft}>
          Vous voulez un portfolio au niveau “vedette” ? Parlons-en.
        </Text>
        <Stack as="form" action="mailto:contact@monportfolio.dev" method="post" encType="text/plain" spacing={3} mt={4}>
          <input className="input-ui" type="text" name="nom" placeholder="Nom" required />
          <input className="input-ui" type="email" name="email" placeholder="Email" required />
          <textarea className="input-ui" name="message" placeholder="Votre message" rows="5" required />
          <Button type="submit" colorScheme="purple" alignSelf="flex-start">
            Envoyer email
          </Button>
        </Stack>
      </Container>

      <Box as="footer" textAlign="center" py={7} borderTop="1px solid" borderColor="whiteAlpha.300">
        <Text color={textSoft}>© {new Date().getFullYear()} Portfolio Vedette — Tous droits réservés.</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedProject?.image && (
              <Image src={selectedProject.image} alt={selectedProject.title} mb={4} borderRadius="md" />
            )}
            <Text mb={3}>{selectedProject?.details}</Text>
            <Badge colorScheme="purple">{selectedProject?.stack}</Badge>
          </ModalBody>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
}
