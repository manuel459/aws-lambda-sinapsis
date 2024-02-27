USE [master]
GO
/****** Object:  Database [Sinapsis]    Script Date: 27/02/2024 01:12:29 ******/
CREATE DATABASE [Sinapsis]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Sinapsis', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Sinapsis.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Sinapsis_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Sinapsis_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Sinapsis] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Sinapsis].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Sinapsis] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Sinapsis] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Sinapsis] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Sinapsis] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Sinapsis] SET ARITHABORT OFF 
GO
ALTER DATABASE [Sinapsis] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Sinapsis] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Sinapsis] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Sinapsis] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Sinapsis] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Sinapsis] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Sinapsis] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Sinapsis] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Sinapsis] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Sinapsis] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Sinapsis] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Sinapsis] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Sinapsis] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Sinapsis] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Sinapsis] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Sinapsis] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Sinapsis] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Sinapsis] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Sinapsis] SET  MULTI_USER 
GO
ALTER DATABASE [Sinapsis] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Sinapsis] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Sinapsis] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Sinapsis] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Sinapsis] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Sinapsis] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Sinapsis] SET QUERY_STORE = OFF
GO
USE [Sinapsis]
GO
/****** Object:  Table [dbo].[campania]    Script Date: 27/02/2024 01:12:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[campania](
	[idCampania] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](200) NULL,
	[idUsuario] [int] NULL,
	[fechaHoraProgramacion] [datetime] NULL,
	[estado] [int] NULL,
 CONSTRAINT [PK_campania] PRIMARY KEY CLUSTERED 
(
	[idCampania] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cliente]    Script Date: 27/02/2024 01:12:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cliente](
	[idCliente] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NULL,
	[estado] [int] NULL,
 CONSTRAINT [PK_cliente] PRIMARY KEY CLUSTERED 
(
	[idCliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[mensaje]    Script Date: 27/02/2024 01:12:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[mensaje](
	[idMensaje] [int] IDENTITY(1,1) NOT NULL,
	[estadoEnvio] [int] NULL,
	[fechaHoraEnvio] [datetime] NULL,
	[mensaje] [varchar](160) NULL,
	[estado] [int] NULL,
 CONSTRAINT [PK_mensaje] PRIMARY KEY CLUSTERED 
(
	[idMensaje] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 27/02/2024 01:12:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[idUsuario] [int] IDENTITY(1,1) NOT NULL,
	[idCliente] [int] NULL,
	[usuario] [varchar](30) NULL,
	[estado] [int] NULL,
 CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED 
(
	[idUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[campania] ON 

INSERT [dbo].[campania] ([idCampania], [nombre], [idUsuario], [fechaHoraProgramacion], [estado]) VALUES (1, N'DEV', 1, CAST(N'2024-02-26T00:00:00.000' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[campania] OFF
GO
SET IDENTITY_INSERT [dbo].[cliente] ON 

INSERT [dbo].[cliente] ([idCliente], [nombre], [estado]) VALUES (1, N'manuel', 1)
SET IDENTITY_INSERT [dbo].[cliente] OFF
GO
SET IDENTITY_INSERT [dbo].[mensaje] ON 

INSERT [dbo].[mensaje] ([idMensaje], [estadoEnvio], [fechaHoraEnvio], [mensaje], [estado]) VALUES (1, 1, CAST(N'2024-02-26T00:00:00.000' AS DateTime), N'Hola Mundo', 1)
SET IDENTITY_INSERT [dbo].[mensaje] OFF
GO
SET IDENTITY_INSERT [dbo].[usuario] ON 

INSERT [dbo].[usuario] ([idUsuario], [idCliente], [usuario], [estado]) VALUES (1, 1, N'desarrollador', 1)
SET IDENTITY_INSERT [dbo].[usuario] OFF
GO
ALTER TABLE [dbo].[campania]  WITH CHECK ADD  CONSTRAINT [FK__campania_usuario] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[usuario] ([idUsuario])
GO
ALTER TABLE [dbo].[campania] CHECK CONSTRAINT [FK__campania_usuario]
GO
ALTER TABLE [dbo].[usuario]  WITH CHECK ADD  CONSTRAINT [FK__usuario_cliente] FOREIGN KEY([idCliente])
REFERENCES [dbo].[cliente] ([idCliente])
GO
ALTER TABLE [dbo].[usuario] CHECK CONSTRAINT [FK__usuario_cliente]
GO
USE [master]
GO
ALTER DATABASE [Sinapsis] SET  READ_WRITE 
GO
