equip = ["balance", "flasks", "icebath", "balancebrush", "büchnerfunnel" "beaker", "beakers", "bentadaptor", "meltingrange", "vial", "boilingchips", "boilingsticks", "buchnerfunnel", "columnforchromatography", "condenser", "conicalcentrifugetube", "cotton", "disposablepipette", "digimelt", "distillationhead", "distillationsetup", "erlenmeyerflask", "filterflask", "filterflaskadapter", "filterfunnel", "filterpaperforbuchnerfunnel", "filterpaperforhirschfunnel", "forcep", "ftir", "fritforhirschfunnel", "gcvial", "glassthermometer", "glassfunnel", "glasspipette", "glasswastecontainer", "graduatedcylinder", "grease", "hirschfunnel", "heatingblock", "hotplate", "icebucket", "keckclip", "kimwipe", "labelingtape", "labjack", "liquid/solidwastecontainer", "magneticwand", "meltingpointcapillarytubes", "mct(microcentrifugetube)", "mctrack", "micropipette", "micropipettetips", "microscaleaircondenser", "microscalereactiontube", "mortar", "nmrtube", "parafilm", "pestle", "phpaper", "plasticfunnel", "plasticpipette", "potassiumiodide-starchpaper", "ringclamp", "roundbottomflask", "roundbottomedflask", "rubberpipettebulb", "scintillationvial", "separatoryfunnel", "secondarycontainer", "septa", "scoop", "stirbar", "stirringrod", "tubing", "testtube", "testtubeclamp", "testtuberack", "thermocouple", "thermometeradaptor", "tlcjar", "tlcplate", "tlcspotter", "tlcvisualizingchamber", "uvlamp", "uv", "washbottle", "wastelabel", "waterlesscondenser", "watchglass", "weighpaper"]
inventory = []
filename = input("enter file name: ")
with open(str({filename})) as f:
    x = f.readlines()
    for line in x:
        processed = ''.join(line.split())
        processed = processed.lower()
        clean_string = [s for s in processed if s.isalnum() or s.isspace()]
        processed = "".join(clean_string)
        for each in equip:
            if each in processed:
                inventory.append(each)
        print(processed)

print()
print()

no_dupes = set(inventory)
for i in no_dupes:
    print(i)

