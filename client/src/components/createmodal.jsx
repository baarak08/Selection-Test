import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Image,
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { api } from "../api/api";
import { useDispatch } from "react-redux";
import iconphoto from "../assets/images/iconPemandangan.png";

export function CreatePost(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState("");
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", selectedFile);

      const response = await api.post("/auth/image/v2/:id", formData);

      // Ubah bagian ini untuk menangani respons dari server
      if (response.data.message === "Upload success") {
        // Lakukan tindakan yang sesuai, misalnya menampilkan notifikasi atau mereset input
        setSelectedFile(null);
        setCaption("");
        props.onClose(); // Tutup modal setelah posting berhasil
      } else {
        // Tangani jika terjadi kesalahan dalam mengunggah gambar
        console.error("Error in uploading image");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir="column" alignItems="center">
              <Image
                w="300px"
                h="300px"
                src={
                  selectedFile ? URL.createObjectURL(selectedFile) : iconphoto
                }
                onClick={() => fileInputRef.current.click()}
              />
              <Input
                type="file"
                ref={fileInputRef}
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                display="none"
              />
              <Flex paddingTop="20px" w="280px" gap="10px">
                <Input
                  height="100px"
                  placeholder="Caption"
                  borderRadius="5px"
                  value={caption}
                  onChange={handleCaptionChange}
                />
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button variant="ghost" colorScheme="green" onClick={handleUpload}>
              Post
            </Button>
            <Button variant="ghost" colorScheme="red" onClick={props.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
